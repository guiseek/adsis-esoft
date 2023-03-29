import { provider } from '@adsis-esoft/shared/util-provider';
import { UserService } from '@adsis-esoft/shared/api-interfaces';
import { UserMockServiceImpl } from './user/services';

provider.add(UserService, UserMockServiceImpl);
