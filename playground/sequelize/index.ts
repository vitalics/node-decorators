import * as Sequelize from 'sequelize';
import { Model, model, SchemaField } from '@decorators/sequelize';
import { Injectable } from '@decorators/di';

const sequelize = new Sequelize('mysql://root:@localhost:32780/database');

// sequelize.define('user')

@Model('animal')
@Injectable()
class Animal {

  @SchemaField(Sequelize.STRING)
  public name: string;

}

const AnimalModel = model<Animal>(sequelize, Animal);

AnimalModel.sync().then(() => {
  return AnimalModel.create({
    name: 'Lion'
  });
})
.then((animal) => {
  console.log(animal);

  console.log(animal.name);

  process.exit(0);
});
