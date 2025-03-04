import { type Component } from "svelte"
import { type RegisteredComponent } from "@builder.io/sdk-svelte"

interface Svelte5RegisteredComponent extends Omit<RegisteredComponent, "component"> {
	component: Component
}

const svelte5CustomComponents: Svelte5RegisteredComponent[] = []

export const customComponents = svelte5CustomComponents as unknown as RegisteredComponent[]
