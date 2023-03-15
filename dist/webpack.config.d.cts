import HTMLWebpackPlugin = require("html-webpack-plugin");
export const mode: string;
export const entry: string;
export namespace output {
    const path: string;
    const filename: string;
    const publicPath: string;
}
export const plugins: HTMLWebpackPlugin[];
export namespace module {
    const rules: ({
        test: RegExp;
        exclude: RegExp;
        use: {
            loader: string;
            options: {
                presets: string[];
            };
        };
    } | {
        test: RegExp;
        use: string;
        exclude: RegExp;
    } | {
        test: RegExp;
        use: {
            loader: string;
            options: {
                name: string;
            };
        }[];
        exclude?: undefined;
    } | {
        test: RegExp;
        use: (string | {
            loader: string;
            options: {
                importLoaders: number;
                modules: boolean;
            };
        })[];
        exclude?: undefined;
    })[];
}
export namespace resolve {
    const extensions: string[];
    const modules: string[];
}
export namespace devServer {
    export namespace _static {
        export const directory: string;
        const publicPath_1: string;
        export { publicPath_1 as publicPath };
    }
    export { _static as static };
    export const proxy: {
        '/api': string;
    };
}
