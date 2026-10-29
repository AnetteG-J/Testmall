window.artifactsTableData = {
  "sv": {
    "labels": {
      "type":        "Type",
      "category":    "Category",
      "useGrouping": "Use grouping",
      "clearAll":      "Clear all",
      "linkToSection": "Link to this section"
    },
    "groupDescriptions": {
      "-str-profile": "<p>Dessa definierar begränsningar på FHIR-resurser för system som följer denna implementationsguide.</p>\n"
      ,"-ex-example": "<p>Detta är exempelinstanser som visar hur data som produceras och konsumeras av system som följer denna implementationsguide kan se ut.</p>\n"
    },
    "rows": [
      { "p":1, "gid":"-str-profile", "g":"Strukturer: Resursprofiler", "n":"Inera Patient", "i":"IneraPatient", "t":"StructureDefinition", "u":"StructureDefinition-IneraPatient.html", "r":"StructureDefinition/IneraPatient", "d":"<p>A template patient profile demonstrating Inera's FHIR profiling conventions.\nAuthors should replace this description with the clinical purpose and scope of the profile.</p>" },
      { "p":1, "gid":"-str-profile", "g":"Strukturer: Resursprofiler", "n":"Stockholm Device", "i":"stockholm-genomic-device", "t":"StructureDefinition", "u":"StructureDefinition-stockholm-genomic-device.html", "r":"StructureDefinition/stockholm-genomic-device", "d":"<p>Profile for devices and software systems used in genomic workflows, including sequencing platforms and bioinformatics pipelines referenced by procedures and analyses.</p>" },
      { "p":1, "gid":"-str-profile", "g":"Strukturer: Resursprofiler", "n":"Stockholm Genomic Patient", "i":"stockholm-genomic-patient", "t":"StructureDefinition", "u":"StructureDefinition-stockholm-genomic-patient.html", "r":"StructureDefinition/stockholm-genomic-patient", "d":"<p>Minimal Patient profile for genomic studies. Exposes only the key elements required: identifier, gender, birthDate and deceased.</p>" },
      { "p":2, "gid":"-ex-example", "g":"Exempel: Exempelinstanser", "n":"Inera Patient Example", "i":"IneraPatientExample", "t":"Patient", "u":"Patient-IneraPatientExample.html", "r":"Patient/IneraPatientExample", "d":"<p>A minimal example of a patient conforming to the IneraPatient profile.</p>" }
    ]
  }
};
