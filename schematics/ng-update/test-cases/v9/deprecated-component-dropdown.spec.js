"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular-devkit/core");
const testing_1 = require("@angular-devkit/core/node/testing");
const schematics_1 = require("@angular-devkit/schematics");
const testing_2 = require("@angular-devkit/schematics/testing");
const shx = require("shelljs");
describe('dropdown components migration', () => {
    let runner;
    let host;
    let tree;
    let tmpDirPath;
    let previousWorkingDir;
    let warnOutput;
    let errorOutput;
    beforeEach(() => {
        runner = new testing_2.SchematicTestRunner('test', require.resolve('../../../migration.json'));
        host = new testing_1.TempScopedNodeJsSyncHost();
        tree = new testing_2.UnitTestTree(new schematics_1.HostTree(host));
        writeFile('/tsconfig.json', JSON.stringify({
            compilerOptions: {
                experimentalDecorators: true,
                lib: ['es2015']
            }
        }));
        writeFile('/angular.json', JSON.stringify({
            projects: { t: { architect: { build: { options: { tsConfig: './tsconfig.json' } } } } }
        }));
        warnOutput = [];
        errorOutput = [];
        runner.logger.subscribe(logEntry => {
            if (logEntry.level === 'warn') {
                warnOutput.push(logEntry.message);
            }
            else if (logEntry.level === 'error') {
                errorOutput.push(logEntry.message);
            }
        });
        previousWorkingDir = shx.pwd();
        tmpDirPath = core_1.getSystemPath(host.root);
        shx.cd(tmpDirPath);
        writeFakeAngular();
    });
    afterEach(() => {
        shx.cd(previousWorkingDir);
        shx.rm('-r', tmpDirPath);
    });
    function writeFakeAngular() { writeFile('/node_modules/@angular/core/index.d.ts', ``); }
    function writeFile(filePath, contents) {
        host.sync.write(core_1.normalize(filePath), core_1.virtualFs.stringToFileBuffer(contents));
    }
    // tslint:disable-next-line:no-any
    function runMigration() {
        return __awaiter(this, void 0, void 0, function* () {
            yield runner.runSchematicAsync('migration-v9', {}, tree).toPromise();
        });
    }
    describe('dropdown components', () => {
        it('should properly report invalid deprecated component', () => __awaiter(void 0, void 0, void 0, function* () {
            writeFile('/index.ts', `;
      import {Component} from '@angular/core'
      @Component({
        template: \`
        <nz-dropdown>
          <a nz-dropdown> Hover me <i nz-icon type="down"></i> </a>
          <ul nz-menu nzSelectable>
            <li nz-menu-item>
              <a>1st menu item</a>
            </li>
          </ul>
        </nz-dropdown>
        <nz-dropdown-button (nzClick)="log()">
          DropDown
          <ul nz-menu>
            <li nz-menu-item>2nd menu item</li>
            <li nz-submenu>
              <span title>sub menu</span>
              <ul>
                <li nz-menu-item>3rd menu item</li>
              </ul>
            </li>
          </ul>
        </nz-dropdown-button>
        \`
      })
      export class MyComp {
        log() {}
      }`);
            yield runMigration();
            expect(warnOutput).toContain('index.ts@5:9 - Found deprecated "<nz-dropdown>" component. ' +
                'Use "[nz-dropdown]" to instead please.');
            expect(warnOutput).toContain('index.ts@13:9 - Found deprecated "<nz-dropdown-button>" component. ' +
                'Use "[nz-dropdown]" to instead please.');
        }));
    });
});
//# sourceMappingURL=deprecated-component-dropdown.spec.js.map