// Interface for domain entities
interface User {
  readonly id: string;
  email: string;
  name: string;
  role: "admin" | "editor" | "viewer";
  createdAt: Date;
  updatedAt?: Date;   // optional property
}

// Extending interfaces
interface AdminUser extends User {
  role: "admin";
  permissions: string[];
}

// Declaration merging — useful for extending library types
interface Window {
  analyticsReady: boolean;
}

// Type alias for complex types
/*
 * De ahora en adelante ya no podrás usar el campo id dentro de UserWithoutId
 * porque como bien dice, lo omitieron
 */
type UserWithoutId = Omit<User, "id">;
type CreateUserInput = Pick<User, "email" | "name" | "role">;
type UserRole = User["role"];   // "admin" | "editor" | "viewer"

// Intersection types
type AuditedEntity = {
  createdBy: string;
  updatedBy: string | null;
};

type AuditedUser = User & AuditedEntity;
let exampleAuditedUser: AuditedUser = {
	id: "WTF",
	email: "naarm@gmail.com",
	name: "Felipe",
	role: "editor",
	createdAt: new Date(),
	createdBy: "Anacleto",
	updatedBy: null
};
console.log(exampleAuditedUser.id);

// Index signatures for dynamic keys
interface Settings {
  [key: string]: string | number | boolean;
  theme: "light" | "dark";   // specific keys still type-checked
}

// Readonly utility type for immutable objects
type ImmutableUser = Readonly<User>;

// Record for key-value maps
type UserRole2 = "admin" | "editor" | "viewer";
type RolePermissions = Record<UserRole2, string[]>;

const permissions: RolePermissions = {
  admin: ["read", "write", "delete"],
  editor: ["read", "write"],
  viewer: ["read"],
};
