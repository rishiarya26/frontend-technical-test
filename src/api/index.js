// eslint-disable-next-line no-unused-vars
import { VEHICLE_LIST } from '../constants/apiEndpoints';
import { request } from './helpers';

/**
 * Pull vehicles information
 *
 * @return {Promise<Array.<vehicleSummaryPayload>>}
 */
// TODO: All API related logic should be made inside this function.
export default async function getData() {
  try {
    const vehicleList = await request(VEHICLE_LIST);

    const vehicleProperties = await Promise.all(
      vehicleList.map((vehicle) => request(vehicle.apiUrl).catch((e) => ({ vehicle, e })))
    );

    const transformedVehicleList = vehicleList.map((vehicle, index) => ({
      ...vehicle,
      price: vehicleProperties[index].price ? vehicleProperties[index].price : null,
      description: vehicleProperties[index].description ? vehicleProperties[index].description : null,
      meta: vehicleProperties[index].meta ? vehicleProperties[index].meta : null,
    }))
      .filter((vehicle) => vehicle.price);

    return transformedVehicleList;
  } catch (e) {
    console.error('An error occurred in getData fn', e);
    throw e;
  }
}
