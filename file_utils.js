var updateMetadata = function (file, key, value) {
    file[key] = value;
    return file;
};

var inheritMetadata = function (file, files) {
};

var toArray = function (file) {
    return [].concat( file );
};

var groupBy = function (files, key) {
    var groupedFiles = [];
    var tempDict = {};
    for (var i=0; i < files.length; i++){
        var value = files[i][key];
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
        if (a[key].constructor === Number) {
            return a[key] - b[key];
        } else {
            var nameA = a[key].toUpperCase();
            var nameB = b[key].toUpperCase();
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