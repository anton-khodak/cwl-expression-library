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
  updatedFile:
    type: File
    outputBinding:
      outputEval: $(updateMetadata(inputs.fastqSeqs, "dog_breed", "New"))