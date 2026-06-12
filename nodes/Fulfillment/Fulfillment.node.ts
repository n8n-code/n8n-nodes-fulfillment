import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { authDescription } from './resources/auth';
import { ordersDescription } from './resources/orders';
import { inventoryDescription } from './resources/inventory';
import { partnersDescription } from './resources/partners';
import { returnsDescription } from './resources/returns';
import { trackingDescription } from './resources/tracking';
import { usersDescription } from './resources/users';
import { accountingDescription } from './resources/accounting';

export class Fulfillment implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Fulfillment',
                name: 'N8nDevFulfillment',
                icon: { light: 'file:./fulfillment.png', dark: 'file:./fulfillment.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'REST API current version supported; upgrade to v2.0 recommended. SOAP API also supported.',
                defaults: { name: 'Fulfillment' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevFulfillmentApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Auth",
					"value": "Auth",
					"description": "Please note that in keeping with the OAuth standard, parameters are underscored however all other API parameters are camelCase."
				},
				{
					"name": "Orders",
					"value": "Orders",
					"description": "Creating, viewing, and canceling orders."
				},
				{
					"name": "Inventory",
					"value": "Inventory",
					"description": ""
				},
				{
					"name": "Partners",
					"value": "Partners",
					"description": ""
				},
				{
					"name": "Returns",
					"value": "Returns",
					"description": ""
				},
				{
					"name": "Tracking",
					"value": "Tracking",
					"description": "Carrier Independent Tracking"
				},
				{
					"name": "Users",
					"value": "Users",
					"description": ""
				},
				{
					"name": "Accounting",
					"value": "Accounting",
					"description": ""
				}
			],
			"default": ""
		},
		...authDescription,
		...ordersDescription,
		...inventoryDescription,
		...partnersDescription,
		...returnsDescription,
		...trackingDescription,
		...usersDescription,
		...accountingDescription
                ],
        };
}
