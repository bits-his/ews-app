import { AGENT_LIST, ERROR_LOG, PHASE_ITEM, PHASE_LIST, PLAZA_ITEM, PLAZA_LIST, RENTAL_DASHBOAD, SHOP_LIST, TENANT_LIST, TENANT_SHOPS, TENANT_USER } from '../actions/constants'

const initialState = {
  tenant: {},
  tenant_shops: [],
  vacant_shops: [],
  tenants: [],
  agents: {},
  agents: [],
  plaza: {},
  plazas: [],
  phase: {},
  phases: [],
  shops: [],
  errors: [],
  dashboard_data: {
    total_tenants: 0,
    total_expired_rents: 0,
    total_paid: 0,
    total_debts: 0,
    total_agents: 0,
  }
}

export default function rentalReducer(state = initialState, action = {}) {
  switch (action.type) {
    case PLAZA_LIST: {
      return {
        ...state,
        plazas: action.payload
      }
    }
    case PLAZA_ITEM: {
      return {
        ...state,
        plaza: action.payload
      }
    }
    // PHASES

    case PHASE_LIST: {
      return {
        ...state,
        phases: action.payload
      }
    }
    case PHASE_ITEM: {
      return {
        ...state,
        phase: action.payload
      }
    }
    case TENANT_LIST:
      return {
        ...state,
        tenants: action.payload
      };
    case TENANT_USER:
      return {
        ...state,
        tenant: action.payload
      };
    case TENANT_SHOPS:
      return {
        ...state,
        tenant_shops: action.payload
      };
    case AGENT_LIST:
      return {
        ...state,
        agents: action.payload
      };
    case SHOP_LIST:
      return {
        ...state,
        shops: action.payload
      };

    case RENTAL_DASHBOAD:
      return {
        ...state,
        dashboard_data: action.payload
      };

    case ERROR_LOG:
      return {
        ...state,
        errors: [...state.errors, action.payload]
      };
    default:
      return state
  }
}