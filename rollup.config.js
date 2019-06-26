import resolve from "rollup-plugin-node-resolve";
import del from "rollup-plugin-delete";
import tslint from "rollup-plugin-tslint";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import sourceMaps from "rollup-plugin-sourcemaps"
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";

const pkg = require('./package.json');
const watch = process.env.ROLLUP_WATCH;

export default {
    input: "src/index.ts",
    output: [
        {
            name: pkg.name,
            file: pkg.main,
            format: "umd",
            sourcemap: true
        },
        {
            file: pkg.module,
            format: "esm",
            sourcemap: true
        }
    ],
    plugins: [
        !watch && del({
            targets: [
                "dist/*",
                "types/*"
            ]
        }),
        resolve(),
        tslint({
            throwOnError: true
        }),
        typescript({
            useTsconfigDeclarationDir: true
        }),
        terser(),
        sourceMaps(),
        watch && serve({
            contentBase: ".",
            open: true,
            openPage: "/examples/index.html",
        }),
        watch && livereload()
    ]
};
