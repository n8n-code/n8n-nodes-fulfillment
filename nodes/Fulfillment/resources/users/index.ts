import type { INodeProperties } from 'n8n-workflow';

export const usersDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					]
				}
			},
			"options": [
				{
					"name": "Get Users Me",
					"value": "Get Users Me",
					"action": "About Me",
					"description": "Returns the user profile of the access token's owner. This could be useful if managing multiple accounts or confirming validity of a token.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/me"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /users/me",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Users Me"
					]
				}
			}
		},
];
