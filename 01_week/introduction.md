# Intro

## storing data

1. Memory: **will be cleared** on every boot/program start
2. Disk: for **persistance**

## Disk storage

### Plain text files

- not good for storing data

### Structured text file:

- json
- csv / tsv _(comma / tab seperated value)_
- xml _(w3.org)_
- ini
- svg _(for images)_

### Binary file

- read by certain program
- images
- audio
- video

### Examples

- unicode.org
- wiki list of file signatures

## Plain text

```
Mary River
2024

Report
This year 2024 will be the beginning of a
new project. Designers of
the new project Mary River
and Matt Jones attended the
launch...
```

**Problem with plain text: Hard or impossible to handle programmatically**

## Structured text

```
Writer: Mary River

Year: 2024

Type: Report

This year 2024 will be the beginning of new project. Designers of the new project Mary River and Matt Jones attended the launch...
```

## Better solutions

### JSON format

```json
{
    "writer" : {
        "firstname" : Mary,
        "lastname" : River
    },
    "year" : 2024,
    "type" : Report,
    "text" : ["This year 2024 will be the beginning of a",
    "new project. Designers of the new project",
    "Mary River and Matt Jones attended the",
    "launch..."]
}
```

### XML format

```xml
<document>
    <writer>
        <firstname>Mary</firstname>
        <lastname>River</lastname>
    </writer>
    <year>2024</year>
    <type>Report</type>
    <text>
        This year 2024 will be the beginning
        of a new project. Designers
        of the new project Mary River
        and Matt Jones attended the
        launch...
    </text>
</document>
```

## Using text file as Data storage

### JSON

```json
[
  {
    "firstname": "Mary",
    "lastname": "River",
    "age": 25
  },
  {
    "firstname": "Matt",
    "lastname": "Jones",
    "age": 30
  }
]
```

### XML

```xml
<persons>
    <person>
        <firstname>Mary</firstname>
        <lastname>River</lastname>
        <age>25</age>
    </person>
    <person>
        <firstname>Matt</firstname>
        <lastname>Jones</lastname>
        <age>30</age>
    </person>
</persons>
```

### CSV

```csv
firstname,lastname,age
Mary,River,25
Matt,Jones,30
```

or

```csv
"firstname","lastname","age"
"Mary","River",25
"Matt","Jones",30
```

### ini

```ini
;this is a comment in ini
[database]
driver=mysql
host=localhost
port=3306
databasename=persondb
[user]
username=Mary
```
