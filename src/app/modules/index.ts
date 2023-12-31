import { AuthModule } from "./auth/auth.module";
import { CountryModule } from "./geo/country/country.module";
import { LocationModule } from "./geo/location/location.module";
import { RegionModule } from "./geo/region/region.module";
import { UserModule } from "./user/user.module";

export default [
  AuthModule,
  UserModule,
  CountryModule,
  RegionModule,
  LocationModule,
];
