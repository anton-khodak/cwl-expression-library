var updateMetadata = function (file, key, value) {
    file['metadata'][key] = value;
    return file;
};

var inheritMetadata = function (file, files) {
    var commonMetadata = {};
    for (var i=0; i < files.length; i++){
        var example = files[i]['metadata'];
        for (var key in example){
                if (i==0)
                    commonMetadata[key] = example[key];
                else{
                    if (!(commonMetadata[key] == example[key])){
                        delete commonMetadata[key]
                    }
                }
            }
        }
    if (!('metadata' in file))
        file['metadata'] = commonMetadata;
    else{
        for (var key in commonMetadata){
            file['metadata'][key] = commonMetadata[key];
        }
    }
    return file;
};

var toArray = function (file) {
    return [].concat( file );
};

var groupBy = function (files, key) {
    var groupedFiles = [];
    var tempDict = {};
    for (var i=0; i < files.length; i++){
        var value = files[i]['metadata'][key];
        if (value in tempDict)
            tempDict[value].push(files[i]);
        else tempDict[value] = [files[i]];
    }
    for (var key in tempDict){
        groupedFiles.push(tempDict[key]);
    }
    return groupedFiles;
};


var orderBy = function (files, key, order) {
    var compareFunction = function (a, b) {
        if (a['metadata'][key].constructor === Number) {
            return a['metadata'][key] - b['metadata'][key];
        } else {
            var nameA = a['metadata'][key].toUpperCase();
            var nameB = b['metadata'][key].toUpperCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
            return 0;
        }
    };

    files = files.sort(compareFunction);
    if (order == undefined || order == "asc")
        return files;
    else
        return files.reverse();
};