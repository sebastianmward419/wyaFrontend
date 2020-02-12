module.exports = 
{   
    mode: 'development',

    entry: __dirname + '/src/index.jsx',

    module: 
    {
        rules: 
        [
            {
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                use: {loader: "babel-loader"}
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },

    output: 
    {
        path    : __dirname + '/../Backend/wya-app/src/main/resources/static/dist/',
        filename: 'bundle.js'
    }
}