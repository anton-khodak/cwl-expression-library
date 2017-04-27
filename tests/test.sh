#!/usr/bin/env bash
cwltool groupBy.cwl inputs/bulk_input.yml
cwltool orderBy.cwl inputs/bulk_input.yml
cwltool toArray_array.cwl inputs/bulk_input.yml
cwltool toArray_file.cwl inputs/one_input.yml
cwltool updateMetadata.cwl inputs/one_input.yml
cwltool inheritMetadata.cwl inputs/inherit_metadata_inputs.yml
