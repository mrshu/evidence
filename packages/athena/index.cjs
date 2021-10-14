const AthenaExpress = require("athena-express"),
	AWS = require("aws-sdk");

const runQuery = async (queryString, database) => {
    try {
	const athenaExpressConfig = { aws: AWS }; //configuring athena-express with aws sdk object
	const athenaExpress = new AthenaExpress(athenaExpressConfig);

	let query = {
	    db: database.db ?? process.env['db'],
	    query: queryString
	};

        const stardizedResults = await athenaExpress.query(query);

        return stardizedResults
    }
    catch (err) {
        if (err.message) {
            throw err.message.replace(/\n|\r/g, " ")
        } else {
            throw err.replace(/\n|\r/g, " ")
        }
    }
}

module.exports = runQuery
