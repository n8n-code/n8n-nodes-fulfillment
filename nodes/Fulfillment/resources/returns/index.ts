import type { INodeProperties } from 'n8n-workflow';

export const returnsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Returns"
					]
				}
			},
			"options": [
				{
					"name": "Get Returns",
					"value": "Get Returns",
					"action": "List Returns",
					"description": "Retrieves summary return activity during the queried timespan. Although return knowledge can be learned from `GET /orders/{id}` it can take an unknown amount of time for an order that is refused or undeliverable to return to an FDC facility. Instead we recommend regularly querying this API.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/returns"
						}
					}
				},
				{
					"name": "Put Returns",
					"value": "Put Returns",
					"action": "Inform us of an RMA",
					"description": "Inform FDC of an expected return.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/returns"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /returns",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Returns"
					],
					"operation": [
						"Get Returns"
					]
				}
			}
		},
		{
			"displayName": "From Date",
			"name": "fromDate",
			"required": true,
			"description": "Date-time in ISO 8601 format for selecting orders after, or at, the specified time",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fromDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Returns"
					],
					"operation": [
						"Get Returns"
					]
				}
			}
		},
		{
			"displayName": "To Date",
			"name": "toDate",
			"required": true,
			"description": "Date-time in ISO 8601 format for selecting orders before, or at, the specified time",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "toDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Returns"
					],
					"operation": [
						"Get Returns"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "A multiplier of the number of items (limit parameter) to skip before returning results",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Returns"
					],
					"operation": [
						"Get Returns"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "The numbers of items to return",
			"default": 80,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Returns"
					],
					"operation": [
						"Get Returns"
					]
				}
			}
		},
		{
			"displayName": "PUT /returns",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Returns"
					],
					"operation": [
						"Put Returns"
					]
				}
			}
		},
		{
			"displayName": "PUT /returns<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Returns"
					],
					"operation": [
						"Put Returns"
					]
				}
			}
		},
];
