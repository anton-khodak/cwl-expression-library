cwlVersion: v1.0
class: CommandLineTool

requirements:
 - class: InlineJavascriptRequirement
   expressionLib:
    - $import: ../file_utils.js

baseCommand: cat
inputs:
  fastqSeqs: File[]

outputs:
  groupedFiles:
    type:
      type: array
      items:
        type: array
        items: File
    outputBinding:
      outputEval: $(groupBy(inputs.fastqSeqs, "dog_breed"))