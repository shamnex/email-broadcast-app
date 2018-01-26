/* tslint:disable */
import { Injectable } from '@angular/core';
import { Mail } from '../../models/Mail';
import { User } from '../../models/User';
import { Container } from '../../models/Container';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    Mail: Mail,
    User: User,
    Container: Container,
    
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
