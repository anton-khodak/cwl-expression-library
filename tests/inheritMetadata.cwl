cwlVersion: v1.0
class: CommandLineTool

requirements:
 - class: InlineJavascriptRequirement
   expressionLib:
    - $import: ../file_utils.js

baseCommand: cat
inputs:
  fastqSeqs: File[]
  fileWithoutMetadata: File

outputs:
  updatedFile:
    type: File
    outputBinding:
      outputEval: $(inheritMetadata(inputs.fileWithoutMetadata, inputs.fastqSeqs))