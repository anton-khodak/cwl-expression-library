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
  sortedFiles:
    type: File[]
    outputBinding:
      outputEval: $(orderBy(inputs.fastqSeqs, "treatment", "asc"))