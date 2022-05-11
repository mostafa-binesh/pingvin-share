export default [
  {
    $id: "shares",
    $read: [],
    $write: [],
    name: "Shares",
    enabled: true,
    permission: "document",
    attributes: [
      {
        key: "securityID",
        type: "string",
        required: false,
        array: false,
        size: 255,
        default: null,
      },
      {
        key: "users",
        type: "string",
        required: false,
        array: true,
        size: 255,
        default: null,
      },
      {
        key: "createdAt",
        type: "integer",
        required: true,
        array: false,
        min: 0,
        max: 9007199254740991,
        default: null,
      },
      {
        key: "expiresAt",
        type: "integer",
        required: true,
        array: false,
        min: 0,
        max: 9007199254740991,
        default: null,
      },
      {
        key: "visitorCount",
        type: "integer",
        required: false,
        array: false,
        min: 0,
        max: 9007199254740991,
        default: 0,
      },
      {
        key: "enabled",
        type: "boolean",
        required: false,
        array: false,
        default: false,
      },
    ],
    indexes: [
      {
        key: "expiresAt",
        type: "key",
        attributes: ["expiresAt"],
        orders: ["ASC"],
      },
      {
        key: "enabled",
        type: "key",
        attributes: ["enabled"],
        orders: ["ASC"],
      },
    ],
  },
  {
    $id: "shareSecurity",
    $read: [],
    $write: [],
    name: "ShareSecurity",
    enabled: true,
    permission: "collection",
    attributes: [
      {
        key: "password",
        type: "string",
        required: false,
        array: false,
        size: 128,
        default: null,
      },
      {
        key: "maxVisitors",
        type: "integer",
        required: false,
        array: false,
        min: 0,
        max: 9007199254740991,
        default: null,
      },
    ],
    indexes: [],
  },
];