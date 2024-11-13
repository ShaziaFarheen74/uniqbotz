"use client"

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"

import {Button} from "@/components/ui/button"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import Wrapper from "@/components/wrapper";
import {Textarea} from "@/components/ui/textarea";
import {toast} from "sonner";
import {useState} from "react";
import {Spinner} from "@/components/icons/spinner";
import {cn} from "@/lib/utils";
import FadeSlideWrapper from "@/components/fade-in-wrapper";

const formSchema = z.object({
    name: z.string().min(1, {
        message: "Name is required"
    }).max(50, {
        message: "Name longer than 50 characters"
    }),
    email: z.string().email({
        message: "Please enter a valid email",
    }),
    message: z.string().min(1, {
        message: "Message is required",
    }),
})

const NEXT_PUBLIC_SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
const NEXT_PUBLIC_TEMPLATE_ID_MESSAGE = process.env.NEXT_PUBLIC_TEMPLATE_ID_MESSAGE;
const NEXT_PUBLIC_USER_ID = process.env.NEXT_PUBLIC_USER_ID;

const sendEmail = async (emailData: unknown) => {
    const controller = new AbortController();
    const signal = controller.signal;

    // Set a timeout to abort the fetch request if it takes too long
    const timeoutId = setTimeout(() => {
        controller.abort();
    }, 10000);

    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(emailData),
        signal,
    });
    clearTimeout(timeoutId);

    if (!response.ok) {
        throw new Error(`Failed to send email: ${response.statusText}`);
    }

    const isJson = response.headers.get("content-type")?.includes("application/json");
    return isJson ? await response.json() : await response.text();
};


export function ContactForm() {
    const [isPendingMessage, setIsPendingMessage] = useState(false);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: ""
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        // console.log(values)
        const emailData = {
            service_id: NEXT_PUBLIC_SERVICE_ID,
            template_id: NEXT_PUBLIC_TEMPLATE_ID_MESSAGE,
            user_id: NEXT_PUBLIC_USER_ID,
            template_params: {
                name: values.name,
                email: values.email,
                message: values.message
            }
        };
        try {
            setIsPendingMessage(true);
            await sendEmail(emailData);
            // console.log("Email sent successfully:", result);
            form.reset()
            toast.success("Thank you for reaching out! We'll get back to you shortly.");
        } catch {
            // console.error("Error sending email:", e);
            toast.error("Failed to send your message. Please check your internet connection or try again in a moment.");
        } finally {
            setIsPendingMessage(false);
        }
    }

    return (
        <FadeSlideWrapper className="pb-20">
            <Wrapper className="max-w-lg mx-auto">
                <h1 className="mb-9 text-3xl">Get In Touch</h1>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel className="text-lg font-semibold">Full Name</FormLabel>
                                    <FormControl>
                                        <Input className="h-12" placeholder="Enter your full name" {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel className="text-lg font-semibold">Email Address</FormLabel>
                                    <FormControl>
                                        <Input className="h-12" placeholder="openup@info.com" {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel className="text-lg font-semibold">Message</FormLabel>
                                    <FormControl>
                                        <Textarea className="h-36 resize-y" placeholder="Write here the details of your message" {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <Button type="submit" disabled={isPendingMessage} aria-disabled={isPendingMessage} className={cn("h-12 space-x-1 w-full" +
                            " text-base", isPendingMessage && "cursor-not-allowed")}>
                            {isPendingMessage && (<Spinner className="animate-spin"/>)}
                            <span>Submit</span>
                        </Button>
                    </form>
                </Form>
            </Wrapper>
        </FadeSlideWrapper>

    )
}