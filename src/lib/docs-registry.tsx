import registry from '@/../registry.json';

// prettier-ignore
import { Menubar, MenubarCheckboxItem, MenubarContent, MenubarItem, MenubarMenu, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger } from '@/registry/menubar';
// prettier-ignore
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/registry/alert-dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/registry/dropdown-menu';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/registry/dialog';
import { Breadcrumb, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from '@/registry/breadcrumb';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/registry/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/registry/select';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/registry/collapsible';
import { Popover, PopoverContent, PopoverTrigger } from '@/registry/popover';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/registry/tooltip';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/registry/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/registry/avatar';
import { BadgeCheckIcon, ChevronsUpDown } from 'lucide-react';
import { RadioGroupItem } from '@/registry/radio-group';
import { AspectRatio } from '@/registry/aspect-ratio';
import { ScrollArea } from '@/registry/scroll-area';
import { RadioGroup } from '@/registry/radio-group';
import { Separator } from '@/registry/separator';
import { Progress } from '@/registry/progress';
import { Checkbox } from '@/registry/checkbox';
import { Button } from '@/registry/button';
import { Badge } from '@/registry/badge';
import { Label } from '@/registry/label';
import { Input } from '@/registry/input';

const components = [
	{
		name: 'alert-dialog',
		docs: 'https://base-ui.com/react/components/alert-dialog',
		preview: (
			<AlertDialog>
				<AlertDialogTrigger>
					<Button variant="outline">Show Dialog</Button>
				</AlertDialogTrigger>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
						<AlertDialogDescription>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel>Cancel</AlertDialogCancel>
						<AlertDialogAction>Continue</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		),
		usage: `import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/registry/alert-dialog';

<AlertDialog>
  <AlertDialogTrigger>Open</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`
	},
	{
		name: 'aspect-ratio',
		baseUiDocs: '@custom',
		preview: (
			<AspectRatio ratio={16 / 9}>
				<img src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80" alt="Image" className="rounded-md object-cover" />
			</AspectRatio>
		),
		usage: `import { AspectRatio } from '@/registry/aspect-ratio';

<AspectRatio ratio={16 / 9}>
  <img src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80" alt="Image" className="rounded-md object-cover" />
</AspectRatio>`
	},
	{
		name: 'avatar',
		baseUiDocs: 'https://base-ui.com/react/components/avatar',
		preview: (
			<Avatar>
				<AvatarImage src="https://github.com/ge0rg3e.png" />
				<AvatarFallback>G</AvatarFallback>
			</Avatar>
		),
		usage: `import { Avatar, AvatarFallback, AvatarImage } from '@/registry/avatar';

<Avatar>
  <AvatarImage src="https://github.com/ge0rg3e.png" />
  <AvatarFallback>G</AvatarFallback>
</Avatar>`
	},
	{
		name: 'badge',
		baseUiDocs: '@custom',
		preview: (
			<div className="flex flex-col items-center gap-2">
				<div className="flex w-full flex-wrap gap-2">
					<Badge>Badge</Badge>
					<Badge variant="secondary">Secondary</Badge>
					<Badge variant="destructive">Destructive</Badge>
					<Badge variant="outline">Outline</Badge>
				</div>
				<div className="flex w-full flex-wrap gap-2">
					<Badge variant="secondary" className="bg-blue-500 text-white dark:bg-blue-600">
						<BadgeCheckIcon />
						Verified
					</Badge>
					<Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">8</Badge>
					<Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums" variant="destructive">
						99
					</Badge>
					<Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums" variant="outline">
						20+
					</Badge>
				</div>
			</div>
		),
		usage: `import { Badge } from '@/registry/badge';

<Badge>Badge</Badge>`
	},
	{
		name: 'button',
		baseUiDocs: '@custom',
		preview: <Button>Button</Button>,
		usage: `<Button>Button</Button>`
	},
	{
		name: 'checkbox',
		baseUiDocs: 'https://base-ui.com/react/components/checkbox',
		preview: (
			<div className="flex flex-col gap-6">
				<div className="flex items-center gap-3">
					<Checkbox id="terms" />
					<Label htmlFor="terms">Accept terms and conditions</Label>
				</div>
				<div className="flex items-start gap-3">
					<Checkbox id="terms-2" defaultChecked />
					<div className="grid gap-2">
						<Label htmlFor="terms-2">Accept terms and conditions</Label>
						<p className="text-muted-foreground text-sm">By clicking this checkbox, you agree to the terms and conditions.</p>
					</div>
				</div>
				<div className="flex items-start gap-3">
					<Checkbox id="toggle" disabled />
					<Label htmlFor="toggle">Enable notifications</Label>
				</div>
				<Label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
					<Checkbox
						id="toggle-2"
						defaultChecked
						className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
					/>
					<div className="grid gap-1.5 font-normal">
						<p className="text-sm leading-none font-medium">Enable notifications</p>
						<p className="text-muted-foreground text-sm">You can enable or disable notifications at any time.</p>
					</div>
				</Label>
			</div>
		),
		usage: `import { Checkbox } from '@/registry/checkbox';

<Checkbox />`
	},
	{
		name: 'breadcrumb',
		baseUiDocs: '@custom',
		preview: (
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href="/">Home</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbLink href="/components">Components</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage>Breadcrumb</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
		),
		usage: `import { Breadcrumb, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from '@/registry/breadcrumb';

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`
	},
	{
		name: 'collapsible',
		baseUiDocs: 'https://base-ui.com/react/components/collapsible',
		preview: (
			<Collapsible className="flex w-[350px] flex-col gap-2">
				<div className="flex items-center justify-between gap-4 px-4">
					<h4 className="text-sm font-semibold">@peduarte starred 3 repositories</h4>
					<CollapsibleTrigger>
						<Button variant="ghost" size="icon" className="size-8">
							<ChevronsUpDown />
							<span className="sr-only">Toggle</span>
						</Button>
					</CollapsibleTrigger>
				</div>
				<div className="rounded-md border px-4 py-2 font-mono text-sm">@radix-ui/primitives</div>
				<CollapsibleContent className="flex flex-col gap-2">
					<div className="rounded-md border px-4 py-2 font-mono text-sm">@radix-ui/colors</div>
					<div className="rounded-md border px-4 py-2 font-mono text-sm">@stitches/react</div>
				</CollapsibleContent>
			</Collapsible>
		),
		usage: `import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/registry/collapsible';

<Collapsible>
  <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
  <CollapsibleContent>
    <p>Yes. Free to use for personal and commercial projects. No attribution required.</p>
  </CollapsibleContent>
</Collapsible>`
	},
	{
		name: 'dialog',
		baseUiDocs: 'https://base-ui.com/react/components/dialog',
		preview: (
			<Dialog>
				<DialogTrigger>
					<Button variant="outline">Open Dialog</Button>
				</DialogTrigger>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>Edit profile</DialogTitle>
						<DialogDescription>Make changes to your profile here. Click save when you&apos;re done.</DialogDescription>
					</DialogHeader>
					<div className="grid gap-4">
						<div className="grid gap-3">
							<Label htmlFor="name-1">Name</Label>
							<Input id="name-1" name="name" defaultValue="Pedro Duarte" />
						</div>
						<div className="grid gap-3">
							<Label htmlFor="username-1">Username</Label>
							<Input id="username-1" name="username" defaultValue="@peduarte" />
						</div>
					</div>
					<DialogFooter>
						<DialogClose>
							<Button variant="outline">Cancel</Button>
						</DialogClose>
						<Button type="submit">Save changes</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		),
		usage: `import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from '@/registry/dialog';

<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>`
	},
	{
		name: 'dropdown-menu',
		baseUiDocs: 'https://base-ui.com/react/components/menu',
		preview: (
			<DropdownMenu>
				<DropdownMenuTrigger>Open</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuLabel>My Account</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem>Profile</DropdownMenuItem>
					<DropdownMenuItem>Billing</DropdownMenuItem>
					<DropdownMenuItem>Team</DropdownMenuItem>
					<DropdownMenuItem>Subscription</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		),
		usage: `import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/registry/dropdown-menu';

<DropdownMenu>
  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`
	},
	{
		name: 'label',
		baseUiDocs: '@custom',
		preview: (
			<div className="flex items-center space-x-2">
				<Checkbox id="terms" />
				<Label htmlFor="terms">Accept terms and conditions</Label>
			</div>
		),
		usage: `import { Label } from '@/registry/label';

<Label htmlFor="email">Your email address</Label>`
	},
	{
		name: 'menubar',
		baseUiDocs: 'https://base-ui.com/react/components/menubar',
		preview: (
			<Menubar>
				<MenubarMenu>
					<MenubarTrigger>File</MenubarTrigger>
					<MenubarContent>
						<MenubarItem>
							New Tab <MenubarShortcut>⌘T</MenubarShortcut>
						</MenubarItem>
						<MenubarItem>
							New Window <MenubarShortcut>⌘N</MenubarShortcut>
						</MenubarItem>
						<MenubarItem disabled>New Incognito Window</MenubarItem>
						<MenubarSeparator />
						<MenubarSub>
							<MenubarSubTrigger>Share</MenubarSubTrigger>
							<MenubarSubContent>
								<MenubarItem>Email link</MenubarItem>
								<MenubarItem>Messages</MenubarItem>
								<MenubarItem>Notes</MenubarItem>
							</MenubarSubContent>
						</MenubarSub>
						<MenubarSeparator />
						<MenubarItem>
							Print... <MenubarShortcut>⌘P</MenubarShortcut>
						</MenubarItem>
					</MenubarContent>
				</MenubarMenu>
				<MenubarMenu>
					<MenubarTrigger>Edit</MenubarTrigger>
					<MenubarContent>
						<MenubarItem>
							Undo <MenubarShortcut>⌘Z</MenubarShortcut>
						</MenubarItem>
						<MenubarItem>
							Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
						</MenubarItem>
						<MenubarSeparator />
						<MenubarSub>
							<MenubarSubTrigger>Find</MenubarSubTrigger>
							<MenubarSubContent>
								<MenubarItem>Search the web</MenubarItem>
								<MenubarSeparator />
								<MenubarItem>Find...</MenubarItem>
								<MenubarItem>Find Next</MenubarItem>
								<MenubarItem>Find Previous</MenubarItem>
							</MenubarSubContent>
						</MenubarSub>
						<MenubarSeparator />
						<MenubarItem>Cut</MenubarItem>
						<MenubarItem>Copy</MenubarItem>
						<MenubarItem>Paste</MenubarItem>
					</MenubarContent>
				</MenubarMenu>
				<MenubarMenu>
					<MenubarTrigger>View</MenubarTrigger>
					<MenubarContent>
						<MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
						<MenubarCheckboxItem checked>Always Show Full URLs</MenubarCheckboxItem>
						<MenubarSeparator />
						<MenubarItem inset>
							Reload <MenubarShortcut>⌘R</MenubarShortcut>
						</MenubarItem>
						<MenubarItem disabled inset>
							Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
						</MenubarItem>
						<MenubarSeparator />
						<MenubarItem inset>Toggle Fullscreen</MenubarItem>
						<MenubarSeparator />
						<MenubarItem inset>Hide Sidebar</MenubarItem>
					</MenubarContent>
				</MenubarMenu>
				<MenubarMenu>
					<MenubarTrigger>Profiles</MenubarTrigger>
					<MenubarContent>
						<MenubarRadioGroup value="benoit">
							<MenubarRadioItem value="andy">Andy</MenubarRadioItem>
							<MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
							<MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
						</MenubarRadioGroup>
						<MenubarSeparator />
						<MenubarItem inset>Edit...</MenubarItem>
						<MenubarSeparator />
						<MenubarItem inset>Add Profile...</MenubarItem>
					</MenubarContent>
				</MenubarMenu>
			</Menubar>
		),
		usage: `import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger } from '@/registry/menubar';

<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>New Window</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Share</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Print</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`
	},
	{
		name: 'popover',
		baseUiDocs: 'https://base-ui.com/react/components/popover',
		preview: (
			<Popover>
				<PopoverTrigger>
					<Button variant="outline">Open popover</Button>
				</PopoverTrigger>
				<PopoverContent className="w-80">
					<div className="grid gap-4">
						<div className="space-y-2">
							<h4 className="leading-none font-medium">Dimensions</h4>
							<p className="text-muted-foreground text-sm">Set the dimensions for the layer.</p>
						</div>
						<div className="grid gap-2">
							<div className="grid grid-cols-3 items-center gap-4">
								<Label htmlFor="width">Width</Label>
								<Input id="width" defaultValue="100%" className="col-span-2 h-8" />
							</div>
							<div className="grid grid-cols-3 items-center gap-4">
								<Label htmlFor="maxWidth">Max. width</Label>
								<Input id="maxWidth" defaultValue="300px" className="col-span-2 h-8" />
							</div>
							<div className="grid grid-cols-3 items-center gap-4">
								<Label htmlFor="height">Height</Label>
								<Input id="height" defaultValue="25px" className="col-span-2 h-8" />
							</div>
							<div className="grid grid-cols-3 items-center gap-4">
								<Label htmlFor="maxHeight">Max. height</Label>
								<Input id="maxHeight" defaultValue="none" className="col-span-2 h-8" />
							</div>
						</div>
					</div>
				</PopoverContent>
			</Popover>
		),
		usage: `import { Popover, PopoverContent, PopoverTrigger } from '@/registry/popover';

<Popover>
  <PopoverTrigger>Open</PopoverTrigger>
  <PopoverContent>Place content for the popover here.</PopoverContent>
</Popover>`
	},
	{
		name: 'progress',
		baseUiDocs: 'https://base-ui.com/react/components/progress',
		preview: <Progress value={50} />,
		usage: `<Progress value={50} />`
	},
	{
		name: 'radio-group',
		baseUiDocs: '@custom',
		preview: (
			<RadioGroup defaultValue="comfortable">
				<div className="flex items-center gap-3">
					<RadioGroupItem value="default" id="r1" />
					<Label htmlFor="r1">Default</Label>
				</div>
				<div className="flex items-center gap-3">
					<RadioGroupItem value="comfortable" id="r2" />
					<Label htmlFor="r2">Comfortable</Label>
				</div>
				<div className="flex items-center gap-3">
					<RadioGroupItem value="compact" id="r3" />
					<Label htmlFor="r3">Compact</Label>
				</div>
			</RadioGroup>
		),
		usage: `import { RadioGroup, RadioGroupItem } from '@/registry/radio-group';

<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Option One</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Option Two</Label>
  </div>
</RadioGroup>`
	},
	{
		name: 'scroll-area',
		baseUiDocs: 'https://base-ui.com/react/components/scroll-area',
		preview: (
			<ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
				Jokester began sneaking into the castle in the middle of the night and leaving jokes all over the place: under the king's pillow, in his soup, even in the royal toilet. The king was
				furious, but he couldn't seem to stop Jokester. And then, one day, the people of the kingdom discovered that the jokes left by Jokester were so funny that they couldn't help but laugh.
				And once they started laughing, they couldn't stop.
			</ScrollArea>
		),
		usage: `import { ScrollArea } from '@/registry/scroll-area';

<ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
  Jokester began sneaking into the castle in the middle of the night and leaving
  jokes all over the place: under the king's pillow, in his soup, even in the
  royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
  then, one day, the people of the kingdom discovered that the jokes left by
  Jokester were so funny that they couldn't help but laugh. And once they
  started laughing, they couldn't stop.
</ScrollArea>`
	},
	{
		name: 'select',
		baseUiDocs: 'https://base-ui.com/react/components/select',
		preview: (
			<Select>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder="Theme" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="light">Light</SelectItem>
					<SelectItem value="dark">Dark</SelectItem>
					<SelectItem value="system">System</SelectItem>
				</SelectContent>
			</Select>
		),
		usage: `import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/registry/select';

<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>`
	},
	{
		name: 'separator',
		baseUiDocs: 'https://base-ui.com/react/components/separator',
		preview: (
			<div>
				<div className="space-y-1">
					<h4 className="text-sm leading-none font-medium">Base UI Primitives</h4>
					<p className="text-muted-foreground text-sm">An open-source UI component library.</p>
				</div>
				<Separator className="my-4" />
				<div className="flex h-5 items-center space-x-4 text-sm">
					<div>Blog</div>
					<Separator orientation="vertical" />
					<div>Docs</div>
					<Separator orientation="vertical" />
					<div>Source</div>
				</div>
			</div>
		),
		usage: `import { Separator } from '@/registry/separator';\n<Separator />`
	},
	{
		name: 'tabs',
		baseUiDocs: 'https://base-ui.com/react/components/tabs',
		preview: (
			<Tabs defaultValue="account">
				<TabsList>
					<TabsTrigger value="account">Account</TabsTrigger>
					<TabsTrigger value="password">Password</TabsTrigger>
				</TabsList>
				<TabsContent value="account">
					<Card>
						<CardHeader>
							<CardTitle>Account</CardTitle>
							<CardDescription>Make changes to your account here. Click save when you&apos;re done.</CardDescription>
						</CardHeader>
						<CardContent className="grid gap-6">
							<div className="grid gap-3">
								<Label htmlFor="tabs-demo-name">Name</Label>
								<Input id="tabs-demo-name" defaultValue="Pedro Duarte" />
							</div>
							<div className="grid gap-3">
								<Label htmlFor="tabs-demo-username">Username</Label>
								<Input id="tabs-demo-username" defaultValue="@peduarte" />
							</div>
						</CardContent>
						<CardFooter>
							<Button>Save changes</Button>
						</CardFooter>
					</Card>
				</TabsContent>
				<TabsContent value="password">
					<Card>
						<CardHeader>
							<CardTitle>Password</CardTitle>
							<CardDescription>Change your password here. After saving, you&apos;ll be logged out.</CardDescription>
						</CardHeader>
						<CardContent className="grid gap-6">
							<div className="grid gap-3">
								<Label htmlFor="tabs-demo-current">Current password</Label>
								<Input id="tabs-demo-current" type="password" />
							</div>
							<div className="grid gap-3">
								<Label htmlFor="tabs-demo-new">New password</Label>
								<Input id="tabs-demo-new" type="password" />
							</div>
						</CardContent>
						<CardFooter>
							<Button>Save password</Button>
						</CardFooter>
					</Card>
				</TabsContent>
			</Tabs>
		),
		usage: `import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/registry/tabs';

<Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
</Tabs>`
	},
	{
		name: 'tooltip',
		baseUiDocs: 'https://base-ui.com/react/components/tooltip',
		preview: (
			<Tooltip>
				<TooltipTrigger>Hover</TooltipTrigger>
				<TooltipContent>
					<p>Add to library</p>
				</TooltipContent>
			</Tooltip>
		),
		usage: `import { Tooltip, TooltipContent, TooltipTrigger } from '@/registry/tooltip';

<Tooltip>
  <TooltipTrigger>Hover</TooltipTrigger>
  <TooltipContent>
    <p>Add to library</p>
  </TooltipContent>
</Tooltip>`
	}
];

export default components.map((component) => {
	const registryInfo = registry.items.find((item) => item.name === component.name)!;

	return {
		name: component.name,
		title: registryInfo.title,
		description: registryInfo.description,
		preview: component.preview,
		usage: component.usage,
		apiReference: `${component.baseUiDocs}#api-reference`
	};
});
