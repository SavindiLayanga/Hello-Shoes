// Enums
export enum PaymentMethod {
  CASH = 'CASH',
  CARD = 'CARD'
}

export enum SupplierCategory {
  LOCAL = 'LOCAL',
  INTERNATIONAL = 'INTERNATIONAL'
}

export enum CustomerLevel {
  GOLD = 'GOLD',
  SILVER = 'SILVER',
  BRONZE = 'BRONZE',
  NEW = 'NEW'
}

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER'
}

export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER'
}

export enum StockStatus {
  AVAILABLE = 'AVAILABLE',
  LOW = 'LOW',
  NOT_AVAILABLE = 'NOT_AVAILABLE'
}

// Interfaces
export interface Sale {
  itemCode: string;
  orderNo: string;
  customerName?: string;
  itemDesc: string;
  size: number;
  unitPrice: number;
  itemQty: number;
  totalPrice: number;
  purchaseDate: Date;
  paymentMethod: PaymentMethod;
  addedPoints: number;
  cashierName: string;
}

export interface Supplier {
  supplierCode: string;
  supplierName: string;
  category: SupplierCategory;
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  addressLine4: string;
  addressLine5: string;
  addressLine6: string;
  contactNo1: string;
  contactNo2: string;
  email: string;
}

export interface Customer {
  customerCode: string;
  customerName: string;
  gender: Gender;
  joinDate: Date;
  level: CustomerLevel;
  totalPoints: number;
  dob: Date;
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  addressLine4: string;
  addressLine5: string;
  contactNo: string;
  email: string;
  recentPurchaseDate: Date;
}

export interface Employee {
  employeeCode: string;
  employeeName: string;
  profilePic: string;
  gender: Gender;
  status: string;
  designation: string;
  accessRole: UserRole;
  dob: Date;
  dateOfJoin: Date;
  attachedBranch: string;
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  addressLine4: string;
  addressLine5: string;
  contactNo: string;
  email: string;
  emergencyContact: string;
  emergencyContactNo: string;
}

export interface InventoryItem {
  itemCode: string;
  itemDesc: string;
  itemPicture: string;
  category: string;
  size: number;
  supplierCode: string;
  supplierName: string;
  unitPriceSale: number;
  unitPriceBuy: number;
  expectedProfit: number;
  profitMargin: number;
  status: StockStatus;
}

export interface AdminDashboard {
  totalSales: number;
  totalProfit: number;
  mostSaleItem: string;
  mostSaleItemPicture: string;
  mostSaleItemQty: number;
}

export interface User {
  email: string;
  password: string;
  role: UserRole;
}