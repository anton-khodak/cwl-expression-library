cwlVersion: v1.0
class: CommandLineTool

requirements:
 - class: InlineJavascriptRequirement
   expressionLib:
    - $import: ../file_utils.js

baseCommand: cat
inputs:
  fastqSeqs: File

outputs:
  fileInArray:
    type: File[]
    outputBinding:
      outputEval: $(toArray(inputs.fastqSeqs))