/* tslint:disable */
import {
  Client
} from '../index';

declare var Object: any;
export interface MailInterface {
  "subject": string;
  "body": string;
  "status": string;
  "date": Date;
  "id"?: any;
  "clientId"?: any;
  "senderId"?: any;
  sender?: Client;
}

export class Mail implements MailInterface {
  "subject": string;
  "body": string;
  "status": string;
  "date": Date;
  "id": any;
  "clientId": any;
  "senderId": any;
  sender: Client;
  constructor(data?: MailInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Mail`.
   */
  public static getModelName() {
    return "Mail";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Mail for dynamic purposes.
  **/
  public static factory(data: MailInterface): Mail{
    return new Mail(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Mail',
      plural: 'Mails',
      path: 'Mails',
      idName: 'id',
      properties: {
        "subject": {
          name: 'subject',
          type: 'string'
        },
        "body": {
          name: 'body',
          type: 'string'
        },
        "status": {
          name: 'status',
          type: 'string',
          default: 'Pending'
        },
        "date": {
          name: 'date',
          type: 'Date'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "clientId": {
          name: 'clientId',
          type: 'any'
        },
        "senderId": {
          name: 'senderId',
          type: 'any'
        },
      },
      relations: {
        sender: {
          name: 'sender',
          type: 'Client',
          model: 'Client',
          relationType: 'belongsTo',
                  keyFrom: 'senderId',
          keyTo: 'id'
        },
      }
    }
  }
}
