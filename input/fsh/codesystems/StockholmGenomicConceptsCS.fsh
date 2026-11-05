CodeSystem: StockholmGenomicConceptsCS
Id: stockholm-genomic-concepts-cs
Title: "Stockholm Genomic Concepts CodeSystem"
Description: "Concepts supporting genomic analysis methods, planned or ordered methods, specimen source, specimen type, specimen state, and analysis focus. Intended for alignment with SNOMED CT."

* ^status = #draft
* ^experimental = false
* ^caseSensitive = false
* ^content = #complete

// Analysis methods
* #whole-genome-sequencing "Whole genome sequencing"
* #whole-exome-sequencing "Whole exome sequencing"
* #whole-transcriptome-sequencing "Whole transcriptome sequencing"
* #gene-panel-sequencing "Gene panel sequencing"
* #chromosomal-microarray-analysis "Chromosomal microarray analysis"
* #methylation-array-analysis "Methylation array analysis"
* #optical-genome-mapping "Optical genome mapping"

// Specimen source
* #blood-source "Blood"
* #bone-marrow-source "Bone marrow"
* #tissue-source "Tissue"
* #saliva-source "Saliva"
* #urine-source "Urine"
* #buccal-swab-source "Buccal swab"
* #muscle-source "Muscle"

// Specimen type
* #dna-material "DNA material"
* #rna-material "RNA material"
* #cfdna-material "Cell-free DNA material"
* #miRNA-material "MicroRNA material"

// Specimen state
* #tumour-specimen "Tumour specimen"
* #germline-specimen "Germline specimen"

// Analysis focus
* #germline-variation "Germline variation"
* #somatic-variation "Somatic variation"
* #metagenomic "Metagenomic"
