export class Logger {
    static info(msg: string) {
        console.log(`%c ${msg}`, 'color: green');
    }

    static warning(msg: string) {
        console.log(`%c ${msg}`, 'color: yellow');
    }


    static error(msg: string) {
        console.log(`%c ${msg}`, 'color: yellow');
    }
}

/**
 * "prepare": "npm rn build"
 * if anyone tries to publish library before build the project(means lib directory doesn't created), 
 * then this command will execute build before npm build
 */

/**
 * "types": "lib/index.d.ts"
 * our editor will find available functions & its types in 'lib/index.d.ts', 
 * so that it can show autocomplete feature in code editor & show error/suggestions while writing code.
 */


/**
 * "files": ["lib/.."]
 * this command tells npm publish that we only want to push lib/*.. files to the npm registory
 */