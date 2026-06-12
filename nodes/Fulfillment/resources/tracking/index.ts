import type { INodeProperties } from 'n8n-workflow';

export const trackingDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Tracking"
					]
				}
			},
			"options": [
				{
					"name": "Get Track",
					"value": "Get Track",
					"action": "Tracking",
					"description": "Get uniformed tracking events for any package, this response is carrier independent. Please note, an API Key is required for throttling purposes, please contact your success manager for details.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/track"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /track",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tracking"
					],
					"operation": [
						"Get Track"
					]
				}
			}
		},
		{
			"displayName": "Tracking Number",
			"name": "trackingNumber",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "trackingNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracking"
					],
					"operation": [
						"Get Track"
					]
				}
			}
		},
];
