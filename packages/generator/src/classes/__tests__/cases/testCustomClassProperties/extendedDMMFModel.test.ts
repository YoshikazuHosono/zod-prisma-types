import { describe, it, expect } from 'vitest';

import { getStringVariants } from '../../../../utils/getStringVariants';
import { CONFIG_SCHEMA_DEFAULTS, ExtendedDMMF } from '../../../ExtendedDMMF';
import { loadDMMF } from '../../utils/loadDMMF';
describe('testSimpleModelNoValidators', async () => {
  const dmmf = await loadDMMF(`${__dirname}/extendedDMMF.prisma`);
  const extendedDMMF = new ExtendedDMMF(dmmf, {});
  const model = extendedDMMF.datamodel.models[0];

  it('should set expected values in model', () => {
    expect(model.generatorConfig).toStrictEqual(CONFIG_SCHEMA_DEFAULTS);
    expect(model.formattedNames).toStrictEqual(getStringVariants(model.name));
    expect(model.scalarFields.length).toBe(2);
    expect(model.relationFields.length).toBe(0);
    expect(model.hasRelationFields).toBe(false);
    expect(model.fields.length).toBe(2);
  });
});