import type { INodeProperties } from 'n8n-workflow';

export const partnersDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Partners"
					]
				}
			},
			"options": [
				{
					"name": "Put Orders ID Ship",
					"value": "Put Orders ID Ship",
					"action": "Ship an Order",
					"description": "Note, this API is used to update orders and is reserved for our shipping partners.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/orders/{{$parameter[\"id\"]}}/ship"
						}
					}
				},
				{
					"name": "Put Orders ID Status",
					"value": "Put Orders ID Status",
					"action": "Update Order Status",
					"description": "Note, this API is used to update orders and is reserved for our shipping partners.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/orders/{{$parameter[\"id\"]}}/status"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "PUT /orders/{id}/ship",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Partners"
					],
					"operation": [
						"Put Orders ID Ship"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "The FDC order Id",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Partners"
					],
					"operation": [
						"Put Orders ID Ship"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Tracking Number",
			"name": "trackingNumber",
			"type": "string",
			"default": "",
			"description": "Tracking number of package",
			"routing": {
				"send": {
					"property": "trackingNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Partners"
					],
					"operation": [
						"Put Orders ID Ship"
					]
				}
			}
		},
		{
			"displayName": "Weight Override",
			"name": "weightOverride",
			"type": "number",
			"default": 0,
			"description": "Override predicted weight of package",
			"routing": {
				"send": {
					"property": "weightOverride",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Partners"
					],
					"operation": [
						"Put Orders ID Ship"
					]
				}
			}
		},
		{
			"displayName": "PUT /orders/{id}/status",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Partners"
					],
					"operation": [
						"Put Orders ID Status"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "The FDC order Id",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Partners"
					],
					"operation": [
						"Put Orders ID Status"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Reason",
			"name": "reason",
			"type": "string",
			"default": "",
			"description": "Human-readable description",
			"routing": {
				"send": {
					"property": "reason",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Partners"
					],
					"operation": [
						"Put Orders ID Status"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Status",
			"name": "status",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Partners"
					],
					"operation": [
						"Put Orders ID Status"
					]
				}
			}
		},
];
