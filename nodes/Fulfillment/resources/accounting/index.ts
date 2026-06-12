import type { INodeProperties } from 'n8n-workflow';

export const accountingDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Accounting"
					]
				}
			},
			"options": [
				{
					"name": "Get Accounting",
					"value": "Get Accounting",
					"action": "List Order Accounting",
					"description": "Retrieves accounting activity during the queried timespan.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/accounting"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /accounting",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Accounting"
					],
					"operation": [
						"Get Accounting"
					]
				}
			}
		},
		{
			"displayName": "From Date",
			"name": "fromDate",
			"required": true,
			"description": "Orders invoice date. Date-time in ISO 8601 format for selecting orders after, or at, the specified time",
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
						"Accounting"
					],
					"operation": [
						"Get Accounting"
					]
				}
			}
		},
		{
			"displayName": "To Date",
			"name": "toDate",
			"required": true,
			"description": "Orders invoice date. Date-time in ISO 8601 format for selecting orders before, or at, the specified time",
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
						"Accounting"
					],
					"operation": [
						"Get Accounting"
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
						"Accounting"
					],
					"operation": [
						"Get Accounting"
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
						"Accounting"
					],
					"operation": [
						"Get Accounting"
					]
				}
			}
		},
		{
			"displayName": "Warehouse Ids",
			"name": "warehouseIds",
			"description": "A CSV of warehouse id, '123' or '1,2,3'",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "warehouseIds",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Accounting"
					],
					"operation": [
						"Get Accounting"
					]
				}
			}
		},
		{
			"displayName": "Order Ids",
			"name": "orderIds",
			"description": "A CSV of FDC order id, '123' or '1,2,3'",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "orderIds",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Accounting"
					],
					"operation": [
						"Get Accounting"
					]
				}
			}
		},
		{
			"displayName": "Hydrate",
			"name": "hydrate",
			"required": true,
			"description": "Adds additional information to the response, uses a CSV format for multiple values.",
			"default": "items",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "hydrate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Accounting"
					],
					"operation": [
						"Get Accounting"
					]
				}
			}
		},
];
