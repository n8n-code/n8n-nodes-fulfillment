import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class FulfillmentApi implements ICredentialType {
        name = 'N8nDevFulfillmentApi';

        displayName = 'Fulfillment API';

        icon: Icon = { light: 'file:../nodes/Fulfillment/fulfillment.png', dark: 'file:../nodes/Fulfillment/fulfillment.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://api.fulfillment.com/v2',
                        required: true,
                        placeholder: 'https://api.fulfillment.com/v2',
                        description: 'The base URL of your Fulfillment API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'x-api-key': '={{$credentials.apiKey}}',
                        },
                },
        };


}
