import type { INodeProperties } from 'n8n-workflow';

export const ordersDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					]
				}
			},
			"options": [
				{
					"name": "Get Orders",
					"value": "Get Orders",
					"action": "List of Orders",
					"description": "Retrieve many orders at once",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/orders"
						}
					}
				},
				{
					"name": "Post Orders",
					"value": "Post Orders",
					"action": "New Order",
					"description": "Error Notes&#58;\n* When `409 Conflict` is a 'Duplicate Order' the `context` will include the FDC `id`, see samples.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/orders"
						}
					}
				},
				{
					"name": "Delete Orders ID",
					"value": "Delete Orders ID",
					"action": "Cancel an Order",
					"description": "Request an order is canceled to prevent shipment.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/orders/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Order",
					"value": "Get Order",
					"action": "Order Details",
					"description": "For the fastest results use the FDC provided `id` however you can use your `merchantOrderId` as the `id`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/orders/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /orders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Get Orders"
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
						"Orders"
					],
					"operation": [
						"Get Orders"
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
						"Orders"
					],
					"operation": [
						"Get Orders"
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
						"Orders"
					],
					"operation": [
						"Get Orders"
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
						"Orders"
					],
					"operation": [
						"Get Orders"
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
						"Orders"
					],
					"operation": [
						"Get Orders"
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
						"Orders"
					],
					"operation": [
						"Get Orders"
					]
				}
			}
		},
		{
			"displayName": "Hydrate",
			"name": "hydrate",
			"description": "Adds additional information to the response, uses a CSV format for multiple values.'",
			"default": "[\n  null\n]",
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
						"Orders"
					],
					"operation": [
						"Get Orders"
					]
				}
			}
		},
		{
			"displayName": "POST /orders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Orders"
					]
				}
			}
		},
		{
			"displayName": "Integrator",
			"name": "integrator",
			"type": "options",
			"default": "1ShoppingCart",
			"description": "Use of this property requires special permission and must be discussed with your account executive; values are restricted while custom values need to be accepted by your AE.",
			"options": [
				{
					"name": "1 Shopping Cart",
					"value": "1ShoppingCart"
				},
				{
					"name": "3 D Cart",
					"value": "3dCart"
				},
				{
					"name": "Adobe BC",
					"value": "AdobeBC"
				},
				{
					"name": "Amazon AU",
					"value": "AmazonAU"
				},
				{
					"name": "Amazon EU",
					"value": "AmazonEU"
				},
				{
					"name": "Amazon NA",
					"value": "AmazonNA"
				},
				{
					"name": "Big Commerce",
					"value": "BigCommerce"
				},
				{
					"name": "Brand Boom",
					"value": "BrandBoom"
				},
				{
					"name": "Bright Pearl",
					"value": "BrightPearl"
				},
				{
					"name": "Buy Goods",
					"value": "BuyGoods"
				},
				{
					"name": "Celery",
					"value": "Celery"
				},
				{
					"name": "Channel Advisor",
					"value": "ChannelAdvisor"
				},
				{
					"name": "Clickbank",
					"value": "Clickbank"
				},
				{
					"name": "Commerce Hub",
					"value": "CommerceHub"
				},
				{
					"name": "Custom",
					"value": "Custom"
				},
				{
					"name": "Demandware",
					"value": "Demandware"
				},
				{
					"name": "Ebay",
					"value": "Ebay"
				},
				{
					"name": "Ecwid",
					"value": "Ecwid"
				},
				{
					"name": "Etsy",
					"value": "Etsy"
				},
				{
					"name": "Foxy Cart",
					"value": "FoxyCart"
				},
				{
					"name": "Goodsie",
					"value": "Goodsie"
				},
				{
					"name": "Infusionsoft",
					"value": "Infusionsoft"
				},
				{
					"name": "Konnektive",
					"value": "Konnektive"
				},
				{
					"name": "Lime Light",
					"value": "LimeLight"
				},
				{
					"name": "Linio",
					"value": "Linio"
				},
				{
					"name": "Linnworks",
					"value": "Linnworks"
				},
				{
					"name": "Magento",
					"value": "Magento"
				},
				{
					"name": "Netsuite",
					"value": "Netsuite"
				},
				{
					"name": "New Egg",
					"value": "NewEgg"
				},
				{
					"name": "Nexternal",
					"value": "Nexternal"
				},
				{
					"name": "Nu Order",
					"value": "NuOrder"
				},
				{
					"name": "Opencart",
					"value": "Opencart"
				},
				{
					"name": "Order Wave",
					"value": "OrderWave"
				},
				{
					"name": "Os Commerce 1",
					"value": "osCommerce1"
				},
				{
					"name": "Overstock",
					"value": "Overstock"
				},
				{
					"name": "Pay Pal",
					"value": "PayPal"
				},
				{
					"name": "Presta Shop",
					"value": "PrestaShop"
				},
				{
					"name": "Pricefalls",
					"value": "Pricefalls"
				},
				{
					"name": "Quickbooks",
					"value": "Quickbooks"
				},
				{
					"name": "Rakuten",
					"value": "Rakuten"
				},
				{
					"name": "Sears",
					"value": "Sears"
				},
				{
					"name": "Sellbrite",
					"value": "Sellbrite"
				},
				{
					"name": "Seller Cloud",
					"value": "SellerCloud"
				},
				{
					"name": "Shipstation",
					"value": "Shipstation"
				},
				{
					"name": "Shopify",
					"value": "Shopify"
				},
				{
					"name": "Skubana",
					"value": "Skubana"
				},
				{
					"name": "Solid Commerce",
					"value": "SolidCommerce"
				},
				{
					"name": "Spark Pay",
					"value": "SparkPay"
				},
				{
					"name": "Spree Commerce",
					"value": "SpreeCommerce"
				},
				{
					"name": "Sps Commerce",
					"value": "spsCommerce"
				},
				{
					"name": "Stitch Labs",
					"value": "StitchLabs"
				},
				{
					"name": "Stone Edge",
					"value": "StoneEdge"
				},
				{
					"name": "Trade Gecko",
					"value": "TradeGecko"
				},
				{
					"name": "Ultra Cart",
					"value": "UltraCart"
				},
				{
					"name": "Volusion",
					"value": "Volusion"
				},
				{
					"name": "VTEX",
					"value": "VTEX"
				},
				{
					"name": "Walmart",
					"value": "Walmart"
				},
				{
					"name": "Woo Commerce",
					"value": "WooCommerce"
				},
				{
					"name": "Yahoo",
					"value": "Yahoo"
				}
			],
			"routing": {
				"send": {
					"property": "integrator",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Orders"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Items",
			"name": "items",
			"type": "json",
			"default": "[\n  {\n    \"declaredValue\": \"129.99\"\n  }\n]",
			"routing": {
				"send": {
					"property": "items",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Orders"
					]
				}
			}
		},
		{
			"displayName": "Merchant ID",
			"name": "merchantId",
			"type": "number",
			"default": 0,
			"description": "Necessary if you have a multitenancy account, otherwise we will associate the order with your account",
			"routing": {
				"send": {
					"property": "merchantId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Orders"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Merchant Order ID",
			"name": "merchantOrderId",
			"type": "string",
			"default": "",
			"description": "Unique ID provided by the merchant",
			"routing": {
				"send": {
					"property": "merchantOrderId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Orders"
					]
				}
			}
		},
		{
			"displayName": "Notes",
			"name": "notes",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "notes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Orders"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Recipient",
			"name": "recipient",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "recipient",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Orders"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Shipping Method",
			"name": "shippingMethod",
			"type": "string",
			"default": "Ground",
			"description": "Custom for you, it will be mapped to an actual method within the OMS UI",
			"routing": {
				"send": {
					"property": "shippingMethod",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Orders"
					]
				}
			}
		},
		{
			"displayName": "Warehouse",
			"name": "warehouse",
			"type": "json",
			"default": "{}",
			"description": "We automatically select a warehouse based on inventory availability, requested carrier and delivery schedule, and carrier cost. You may however override this process. Because this is not recommended please inform your AE prior to using so they may enable this feature.",
			"routing": {
				"send": {
					"property": "warehouse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Post Orders"
					]
				}
			}
		},
		{
			"displayName": "DELETE /orders/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Delete Orders ID"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of order that needs to be canceled",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Delete Orders ID"
					]
				}
			}
		},
		{
			"displayName": "GET /orders/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Get Order"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "The FDC order Id",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Get Order"
					]
				}
			}
		},
		{
			"displayName": "Merchant ID",
			"name": "merchantId",
			"description": "Providing your `merchantId` indicates the `id` is your `merchantOrderId`. Although it is not necessary to provide this it will speed up your results when using your `merchantOrderId` however it will slow your results when using the FDC provided `id`",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "merchantId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Get Order"
					]
				}
			}
		},
		{
			"displayName": "Hydrate",
			"name": "hydrate",
			"description": "Adds additional information to the response, uses a CSV format for multiple values.'",
			"default": "[\n  null\n]",
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
						"Orders"
					],
					"operation": [
						"Get Order"
					]
				}
			}
		},
];
