import type { INodeProperties } from 'n8n-workflow';

export const authDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Auth"
					]
				}
			},
			"options": [
				{
					"name": "Post OAuth Access Token",
					"value": "Post OAuth Access Token",
					"action": "Generate an Access Token",
					"description": "By default tokens are valid for 7 days while refresh tokens are valid for 30 days. If your `grant_type` is \"password\" include the `username` and `password`, if however your `grant_type` is \"refresh_token\" the username/password are not required, instead set the `refresh_token`",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/oauth/access_token"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /oauth/access_token",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Auth"
					],
					"operation": [
						"Post OAuth Access Token"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Client ID",
			"name": "client_id",
			"type": "string",
			"default": "",
			"description": "Id and secret provided by FDC",
			"routing": {
				"send": {
					"property": "client_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auth"
					],
					"operation": [
						"Post OAuth Access Token"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Client Secret",
			"name": "client_secret",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "client_secret",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auth"
					],
					"operation": [
						"Post OAuth Access Token"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Grant Type",
			"name": "grant_type",
			"type": "options",
			"default": "password",
			"description": "Indicates how you're authenticating your request",
			"options": [
				{
					"name": "Password",
					"value": "password"
				},
				{
					"name": "Refresh Token",
					"value": "refresh_token"
				}
			],
			"routing": {
				"send": {
					"property": "grant_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auth"
					],
					"operation": [
						"Post OAuth Access Token"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Scope",
			"name": "scope",
			"type": "options",
			"default": "oms",
			"description": "Currently limited to Order Management System",
			"options": [
				{
					"name": "Oms",
					"value": "oms"
				}
			],
			"routing": {
				"send": {
					"property": "scope",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auth"
					],
					"operation": [
						"Post OAuth Access Token"
					]
				}
			}
		},
];
