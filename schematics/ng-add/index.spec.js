"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular-devkit/core");
const testing_1 = require("@angular-devkit/schematics/testing");
const schematics_1 = require("@angular/cdk/schematics");
const config_1 = require("@schematics/angular/utility/config");
const test_1 = require("@schematics/angular/utility/test");
const path_1 = require("path");
const test_app_1 = require("../testing/test-app");
describe('ng-add schematic', () => {
    let runner;
    let appTree;
    beforeEach(() => __awaiter(this, void 0, void 0, function* () {
        runner = new testing_1.SchematicTestRunner('schematics', require.resolve('../collection.json'));
        appTree = yield test_app_1.createTestApp(runner);
    }));
    it('should update package.json', () => __awaiter(this, void 0, void 0, function* () {
        const tree = yield runner.runSchematicAsync('ng-add', {}, appTree).toPromise();
        const packageJson = JSON.parse(test_1.getFileContent(tree, '/package.json'));
        const dependencies = packageJson.dependencies;
        expect(dependencies['ng-zorro-antd']).toBeDefined();
        expect(runner.tasks.some(task => task.name === 'run-schematic')).toBe(true);
    }));
    it('should add hammerjs to package.json', () => __awaiter(this, void 0, void 0, function* () {
        const tree = yield runner.runSchematicAsync('ng-add', { gestures: true }, appTree).toPromise();
        const packageJson = JSON.parse(test_1.getFileContent(tree, '/package.json'));
        const dependencies = packageJson.dependencies;
        expect(dependencies.hammerjs).toBeDefined();
    }));
    it('should skip package.json', () => __awaiter(this, void 0, void 0, function* () {
        const tree = yield runner.runSchematicAsync('ng-add', { skipPackageJson: true }, appTree).toPromise();
        const packageJson = JSON.parse(test_1.getFileContent(tree, '/package.json'));
        const dependencies = packageJson.dependencies;
        expect(dependencies['ng-zorro-antd']).toBeUndefined();
    }));
    it('should add hammerjs import to project main file', () => __awaiter(this, void 0, void 0, function* () {
        const tree = yield runner.runSchematicAsync('ng-add-setup-project', { gestures: true }, appTree).toPromise();
        const workspace = config_1.getWorkspace(tree);
        const project = schematics_1.getProjectFromWorkspace(workspace);
        const fileContent = test_1.getFileContent(tree, core_1.normalize(path_1.join(project.sourceRoot, 'main.ts')));
        expect(fileContent).toContain(`import 'hammerjs';`);
    }));
    it('should add default theme', () => __awaiter(this, void 0, void 0, function* () {
        const tree = yield runner.runSchematicAsync('ng-add-setup-project', {}, appTree).toPromise();
        const workspace = config_1.getWorkspace(tree);
        const project = schematics_1.getProjectFromWorkspace(workspace);
        expect(schematics_1.getProjectTargetOptions(project, 'build').styles)
            .toContain('./node_modules/ng-zorro-antd/ng-zorro-antd.min.css');
    }));
    it('should add custom theme', () => __awaiter(this, void 0, void 0, function* () {
        appTree = yield test_app_1.createTestApp(runner, { style: 'less' });
        const tree = yield runner.runSchematicAsync('ng-add-setup-project', { theme: true }, appTree).toPromise();
        const workspace = config_1.getWorkspace(tree);
        const project = schematics_1.getProjectFromWorkspace(workspace);
        const customThemePath = core_1.normalize(path_1.join(project.sourceRoot, 'styles.less'));
        const buffer = tree.read(customThemePath);
        const themeContent = buffer.toString();
        expect(themeContent).toContain(`@import "../node_modules/ng-zorro-antd/ng-zorro-antd.less`);
        expect(themeContent).toContain(`@ant-prefix: ant;`);
        expect(themeContent).toContain(`@primary-color: @blue-6;`);
        expect(schematics_1.getProjectTargetOptions(project, 'build').styles)
            .toContain('projects/ng-zorro/src/styles.less');
    }));
    it('should add custom theme file when no LESS file in project', () => __awaiter(this, void 0, void 0, function* () {
        const tree = yield runner.runSchematicAsync('ng-add-setup-project', { theme: true }, appTree).toPromise();
        const workspace = config_1.getWorkspace(tree);
        const project = schematics_1.getProjectFromWorkspace(workspace);
        expect(schematics_1.getProjectTargetOptions(project, 'build').styles)
            .toContain('projects/ng-zorro/src/theme.less');
    }));
    it('should add icon assets', () => __awaiter(this, void 0, void 0, function* () {
        const tree = yield runner.runSchematicAsync('ng-add-setup-project', { dynamicIcon: true }, appTree).toPromise();
        const workspace = config_1.getWorkspace(tree);
        const project = schematics_1.getProjectFromWorkspace(workspace);
        const assets = schematics_1.getProjectTargetOptions(project, 'build').assets;
        const assetsString = JSON.stringify(assets);
        const iconPathSegment = '@ant-design/icons-angular';
        expect(assetsString).toContain(iconPathSegment);
    }));
    it('should required modules', () => __awaiter(this, void 0, void 0, function* () {
        const tree = yield runner.runSchematicAsync('ng-add-setup-project', {}, appTree).toPromise();
        const fileContent = test_1.getFileContent(tree, '/projects/ng-zorro/src/app/app.module.ts');
        expect(fileContent).toContain('NgZorroAntdModule');
        expect(fileContent).toContain('FormsModule');
        expect(fileContent).toContain('HttpClientModule');
    }));
    it('should add browserAnimationsModuleName if animations is enable', () => __awaiter(this, void 0, void 0, function* () {
        const tree = yield runner.runSchematicAsync('ng-add-setup-project', { animations: true }, appTree).toPromise();
        const fileContent = test_1.getFileContent(tree, '/projects/ng-zorro/src/app/app.module.ts');
        expect(fileContent).toContain('BrowserAnimationsModule');
    }));
    it('should add noopAnimationsModuleName if animations is disable', () => __awaiter(this, void 0, void 0, function* () {
        const tree = yield runner.runSchematicAsync('ng-add-setup-project', { animations: false }, appTree).toPromise();
        const fileContent = test_1.getFileContent(tree, '/projects/ng-zorro/src/app/app.module.ts');
        expect(fileContent).toContain('NoopAnimationsModule');
    }));
    it('should not add BrowserAnimationsModule if NoopAnimationsModule is set up', () => __awaiter(this, void 0, void 0, function* () {
        const workspace = config_1.getWorkspace(appTree);
        const project = schematics_1.getProjectFromWorkspace(workspace);
        schematics_1.addModuleImportToRootModule(appTree, 'NoopAnimationsModule', '@angular/platform-browser/animations', project);
        spyOn(console, 'log');
        const tree = yield runner.runSchematicAsync('ng-add-setup-project', { animations: true }, appTree).toPromise();
        const fileContent = test_1.getFileContent(tree, '/projects/ng-zorro/src/app/app.module.ts');
        expect(fileContent).toContain('NoopAnimationsModule');
        expect(fileContent).not.toContain('BrowserAnimationsModule');
        expect(console.log)
            .toHaveBeenCalledWith(jasmine.stringMatching(/Could not set up ".+BrowserAnimationsModule.+" because ".+NoopAnimationsModule.+" is already imported./));
    }));
    it('should not add NoopAnimationsModule if BrowserAnimationsModule is set up', () => __awaiter(this, void 0, void 0, function* () {
        const workspace = config_1.getWorkspace(appTree);
        const project = schematics_1.getProjectFromWorkspace(workspace);
        schematics_1.addModuleImportToRootModule(appTree, 'BrowserAnimationsModule', '@angular/platform-browser/animations', project);
        const tree = yield runner.runSchematicAsync('ng-add-setup-project', { animations: false }, appTree).toPromise();
        const fileContent = test_1.getFileContent(tree, '/projects/ng-zorro/src/app/app.module.ts');
        expect(fileContent).not.toContain('NoopAnimationsModule');
        expect(fileContent).toContain('BrowserAnimationsModule');
    }));
    it('should register default locale id', () => __awaiter(this, void 0, void 0, function* () {
        const tree = yield runner.runSchematicAsync('ng-add-setup-project', {}, appTree).toPromise();
        const fileContent = test_1.getFileContent(tree, '/projects/ng-zorro/src/app/app.module.ts');
        expect(fileContent).toContain('{ provide: NZ_I18N, useValue: en_US }');
        expect(fileContent).toContain('registerLocaleData(en)');
    }));
    it('should register specified locale id', () => __awaiter(this, void 0, void 0, function* () {
        const tree = yield runner.runSchematicAsync('ng-add-setup-project', { locale: 'zh_CN' }, appTree).toPromise();
        const fileContent = test_1.getFileContent(tree, '/projects/ng-zorro/src/app/app.module.ts');
        expect(fileContent).toContain('{ provide: NZ_I18N, useValue: zh_CN }');
        expect(fileContent).toContain('registerLocaleData(zh)');
    }));
    it('should have a deprecation `--i18n` warning', () => __awaiter(this, void 0, void 0, function* () {
        spyOn(console, 'log');
        const tree = yield runner.runSchematicAsync('ng-add-setup-project', { i18n: 'zh_CN' }, appTree).toPromise();
        const fileContent = test_1.getFileContent(tree, '/projects/ng-zorro/src/app/app.module.ts');
        expect(fileContent).toContain('{ provide: NZ_I18N, useValue: zh_CN }');
        expect(fileContent).toContain('registerLocaleData(zh)');
        expect(console.log)
            .toHaveBeenCalledWith(jasmine.stringMatching(/.+WARN.+ .+--i18n.+ option will be deprecated, use .+--locale.+ instead/));
    }));
    it('should not add locale id if locale id is set up', () => __awaiter(this, void 0, void 0, function* () {
        yield runner.runSchematicAsync('ng-add-setup-project', {}, appTree).toPromise();
        spyOn(console, 'log');
        const tree = yield runner.runSchematicAsync('ng-add-setup-project', { i18n: 'zh_CN' }, appTree).toPromise();
        const fileContent = test_1.getFileContent(tree, '/projects/ng-zorro/src/app/app.module.ts');
        expect(fileContent).toContain('{ provide: NZ_I18N, useValue: en_US }');
        expect(fileContent).toContain('registerLocaleData(en)');
        expect(fileContent).not.toContain('{ provide: NZ_I18N, useValue: zh_CN }');
        expect(fileContent).not.toContain('registerLocaleData(zh)');
        expect(console.log)
            .toHaveBeenCalledWith(jasmine.stringMatching(/Could not add the registerLocaleData to your app.module file/));
    }));
});
//# sourceMappingURL=index.spec.js.map