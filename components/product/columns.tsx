"use client"

import { ArrowUpDown } from "lucide-react"
import { ProductProps } from "@/lib/interface"
import { ColumnDef } from "@tanstack/react-table"
import { Button } from "../ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { formatToVND } from "@/lib/format"
import { Input } from "../ui/input"
import Image from "next/image"

export const columns: ColumnDef<ProductProps>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
         variant={"ghost"} className="text-center w-full"
         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      return <div className="flex items-center gap-1 text-xs w-[250px]">
        {row.getValue('name')}
      </div>
    }
  },
  {
    accessorKey: "size",
    header: ({ column }) => {
      return (
        <Button className="w-full text-center"
         variant={"ghost"}
         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Size
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      return <div className="text-center">{row.getValue('size')}</div>
    }
  },
  {
    accessorKey: "instock",
    header: ({ column }) => {
      return (
        <Button className="w-full text-center"
         variant={"ghost"}
         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          In Stock
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      return <div className="text-center">{row.getValue('instock')}</div>
    }
  },
  {
    accessorKey: "sold",
    header: ({ column }) => {
      return (
        <Button className="w-full text-center"
         variant={"ghost"}
         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Sold
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      return <div className="text-center">{row.getValue('sold')}</div>
    }
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <Button className="w-full text-center"
         variant={"ghost"}
         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      return <div className="text-center">{formatToVND(row.getValue('price'))}</div>
    }
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
    cell: ({ row }) => {
      return <div className="w-[100px]">{row.getValue('updatedAt')}</div>
    }
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
    cell: ({ row }) => {
      return <div className="w-[100px]">{row.getValue('createdAt')}</div>
    }
  },
]
