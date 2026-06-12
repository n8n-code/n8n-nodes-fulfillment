import type { INodeProperties } from 'n8n-workflow';

export const inventoryDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Inventory"
					]
				}
			},
			"options": [
				{
					"name": "Get Inventory",
					"value": "Get Inventory",
					"action": "List of Item Inventories",
					"description": "Retrieve inventory for one or more items. This API requires elevated permissions, please speak to your success manager.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/inventory"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /inventory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Inventory"
					],
					"operation": [
						"Get Inventory"
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
						"Inventory"
					],
					"operation": [
						"Get Inventory"
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
						"Inventory"
					],
					"operation": [
						"Get Inventory"
					]
				}
			}
		},
		{
			"displayName": "Merchant Ids",
			"name": "merchantIds",
			"description": "A CSV of merchant id, '123' or '1,2,3'",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "merchantIds",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Inventory"
					],
					"operation": [
						"Get Inventory"
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
						"Inventory"
					],
					"operation": [
						"Get Inventory"
					]
				}
			}
		},
		{
			"displayName": "External Sku Names",
			"name": "externalSkuNames",
			"description": "A CSV of sku reference names, 'skuName1' or 'skuName1,skuName2,skuName3'",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "externalSkuNames",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Inventory"
					],
					"operation": [
						"Get Inventory"
					]
				}
			}
		},
];
