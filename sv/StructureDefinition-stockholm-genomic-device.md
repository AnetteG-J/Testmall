# Stockholm Device - Region Stockholms testmall implementationsguide FHIR v2.3.0

## Resursprofil: Stockholm Device 

**Användningar:**

* Denna Profil används inte av några profiler i denna implementationsguide

Du kan också kontrollera [användningar i FHIR IG-statistiken](https://packages2.fhir.org/xig/RegionStockholm|current/StructureDefinition/stockholm-genomic-device)

### Formella vyer av profilinnehåll

 [Beskrivningsdifferentialer, ögonblicksbilder och andra representationer](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

*  [Tabell med nyckelelement](#tabs-key) 
*  [Differentialtabell](#tabs-diff) 
*  [Ögonblicksbildstabell](#tabs-snap) 
*  [Statistik/referenser](#tabs-summ) 
*  [Alla](#tabs-all) 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [Device](http://hl7.org/fhir/R4/device.html) 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [Device](http://hl7.org/fhir/R4/device.html) 

 **Vy med nyckelelement** 

#### Terminologibindningar

#### Begränsningar

 **Differentialvy** 

Denna struktur är härledd från [Device](http://hl7.org/fhir/R4/device.html) 

 **ÖgonblicksbildsvyView** 

#### Terminologibindningar

#### Begränsningar

Denna struktur är härledd från [Device](http://hl7.org/fhir/R4/device.html) 

 

Andra representationer av profilen: [CSV](../StructureDefinition-stockholm-genomic-device.csv), [Excel](../StructureDefinition-stockholm-genomic-device.xlsx), [Schematron](../StructureDefinition-stockholm-genomic-device.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "stockholm-genomic-device",
  "url" : "https://pub.regionstockholm.se/fhir/ImplementationGuide/Testmall/StructureDefinition/stockholm-genomic-device",
  "version" : "2.3.0",
  "name" : "StockholmGenomicDevice",
  "title" : "Stockholm Device",
  "status" : "draft",
  "date" : "2026-10-29T11:54:13+00:00",
  "publisher" : "Region Stockholm",
  "contact" : [{
    "name" : "Region Stockholm",
    "telecom" : [{
      "system" : "url",
      "value" : "https://www.regionstockholm.se"
    }]
  }],
  "description" : "Profile for devices and software systems used in genomic workflows, including sequencing platforms and bioinformatics pipelines referenced by procedures and analyses.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "SE",
      "display" : "Sweden"
    }]
  }],
  "purpose" : "The purpose of this device profile is to store structured information about devices used to perform the Genomic Test",
  "fhirVersion" : "4.0.1",
  "mapping" : [{
    "identity" : "rim",
    "uri" : "http://hl7.org/v3",
    "name" : "RIM Mapping"
  },
  {
    "identity" : "w5",
    "uri" : "http://hl7.org/fhir/fivews",
    "name" : "FiveWs Pattern Mapping"
  },
  {
    "identity" : "udi",
    "uri" : "http://fda.gov/UDI",
    "name" : "UDI Mapping"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "Device",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Device",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Device",
      "path" : "Device"
    },
    {
      "id" : "Device.identifier",
      "path" : "Device.identifier",
      "short" : "Business identifiers for the device or software",
      "definition" : "Identifiers that uniquely identify a physical device or analytical system in the local ecosystem.",
      "mustSupport" : true
    },
    {
      "id" : "Device.udiCarrier",
      "path" : "Device.udiCarrier",
      "mustSupport" : true
    },
    {
      "id" : "Device.status",
      "path" : "Device.status",
      "short" : "Operational device status",
      "definition" : "Indicates whether the device is active, inactive, or entered in error at the time of use."
    },
    {
      "id" : "Device.manufacturer",
      "path" : "Device.manufacturer",
      "mustSupport" : true
    },
    {
      "id" : "Device.serialNumber",
      "path" : "Device.serialNumber",
      "mustSupport" : true
    },
    {
      "id" : "Device.deviceName",
      "path" : "Device.deviceName",
      "mustSupport" : true
    },
    {
      "id" : "Device.type",
      "path" : "Device.type",
      "short" : "Classified device type used in genomics",
      "definition" : "Coded device type describing the platform, instrument, or software category used in the workflow.",
      "mustSupport" : true
    },
    {
      "id" : "Device.version",
      "path" : "Device.version",
      "mustSupport" : true
    }]
  }
}

```
