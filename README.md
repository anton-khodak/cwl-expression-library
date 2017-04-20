CWL expression library aims to provide a collection of handy Javascript functions which can be imported 
in a CWL expression and used for manipulating CWL File objects.

# Usage 

To use the library you need to copy file *file_utils.js* to your repository and then import it into your CWL code
in the `expressionLib` field of `InlineJavascriptRequirement`

```
cwlVersion: v1.0
class: Workflow

requirements:
 - class: InlineJavascriptRequirement
   expressionLib:
    - $import: file_utils.js
```

after that you can use the functions from `file_utils.js` inside your expressions. Example:
```
outputs:
  sortedFiles:
    type: File[]
    outputBinding:
      outputEval: $(orderBy(inputs.fastqSeqs, "treatment", "asc"))
```

# API
File **updateMetadata(File, key, value)** - returns File object with updated metadata *key* with a new *value*

File **inheritMetadata(File, [sourceFiles])** - returns File object with updated metadata with set of metadata keys 
which are same for all *sourceFiles* in list

[File] **toArray(File or [File])** - wraps a File object into Array if not Array already

[[File]] **groupBy([File], key)** - returns list of list of Files grouped by metadata *key*

[File] **orderBy([File], key)** - order list by metadata *key*