/* tslint:disable */
import { Injectable } from '@angular/core';
import { Mail } from '../../models/Mail';
import { Client } from '../../models/Client';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    Mail: Mail,
    Client: Client,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
