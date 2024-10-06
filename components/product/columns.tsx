"use client"

import { ArrowUpDown } from "lucide-react"
import { ProductProps } from "@/lib/interface"
import { ColumnDef } from "@tanstack/react-table"
import { Button } from "../ui/button"

export const columns: ColumnDef<ProductProps>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "size",
    header: ({ column }) => {
      return (
        <Button
         variant={"ghost"}
         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Size
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "instock",
    header: ({ column }) => {
      return (
        <Button
         variant={"ghost"}
         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          In Stock
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "sold",
    header: ({ column }) => {
      return (
        <Button
         variant={"ghost"}
         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Sold
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <Button
         variant={"ghost"}
         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
         variant={"ghost"}
         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Created At
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "updatedAt",
    header: ({ column }) => {
      return (
        <Button
         variant={"ghost"}
         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Updated At
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
]
