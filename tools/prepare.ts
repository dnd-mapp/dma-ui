import { copyFile, cp, mkdir, rm } from 'fs/promises';

const packagePath = '.package/';
const filePath = 'LICENSE.md';
const compiledBundlePath = 'dist/dma-ui/';

async function prepare() {
    console.log('- Preparing package...');
    await rm(packagePath, { recursive: true, force: true });
    await mkdir(packagePath);

    await copyFile(filePath, `${packagePath}/${filePath}`);
    await cp(compiledBundlePath, packagePath, {
        recursive: true,
        filter: (source) => !source.includes('.npmignore'),
    });
    console.log('- Package prepared!');
}

(async () => {
    try {
        await prepare();
    } catch (error) {
        console.error(error);
    }
})();
