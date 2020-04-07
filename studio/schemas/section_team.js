export default {
    "type": "object",
    "name": "section_team",
    "title": "Team Section",
    "fields": [
        {
            "type": "string",
            "name": "section_id",
            "title": "Element ID of this section",
            "description": "The element ID can be used to link to this section from another section",
            "validation": null
        },
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "The title of this section",
            "validation": null
        },
        {
            "type": "string",
            "name": "subtitle",
            "title": "Subtitle",
            "description": "The text shown below the title.",
            "validation": null
        },
        {
            "type": "markdown",
            "name": "content",
            "title": "Content",
            "description": "The text content of the section, appears before member grid",
            "validation": null
        },
        {
            "type": "array",
            "name": "teamMembers",
            "title": "Team Members",
            "validation": null,
            "of": [
                {
                    "type": "object",
                    "fields": [
                        {
                            "type": "string",
                            "name": "name",
                            "title": "Name",
                            "validation": null
                        },
                        {
                            "type": "image",
                            "name": "avatar",
                            "title": "Avatar",
                            "validation": null
                        },
                        {
                            "type": "markdown",
                            "name": "bio",
                            "title": "Bio",
                            "description": "This is for the team members biography",
                            "validation": null
                        }
                    ],
                    "preview": {
                        "select": {
                            "title": "name"
                        }
                    }
                }
            ]
        },
     
        {
            "type": "string",
            "name": "bg",
            "title": "Background",
            "description": "The background of the section.",
            "initialValue": "gray",
            "validation": null,
            "options": {
                "list": [
                    "gray",
                    "white"
                ]
            }
        },
        {
            "type": "string",
            "name": "type",
            "title": "Reference Type Name",
            "description": "Name of the Stackbit object model, used by fields of type reference",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "section_team"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "object"
                ]
            }
        }
    ],
    "preview": {
        "select": {
            "title": "title"
        }
    }
}