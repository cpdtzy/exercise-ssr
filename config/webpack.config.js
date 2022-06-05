import {resolve} from "path";

export default {
    mode: 'development',
    target: 'node',
    entry: resolve('src/server/index.ts'),
    output: {
        path: resolve('dist'),
        filename: 'build.js',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    'ts-loader',
                    'babel-loader',
                ],
            }
        ]
    }
};
