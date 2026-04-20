"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle2, Settings, Zap, Shield, Cpu, BarChart, Users } from "lucide-react"

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-50 dark:bg-background">
                {/* Background Decorative Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-orega-blue/5 to-orega-navy/10 dark:from-orega-blue/10 dark:to-transparent z-0" />
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-orega-blue/20 rounded-full blur-3xl opacity-50 z-0" />

                <div className="container relative z-10 mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8 max-w-2xl">
                        <div className="inline-flex items-center rounded-full border border-orega-blue/30 bg-orega-blue/10 px-3 py-1 text-sm font-medium text-orega-blue dark:text-orega-light">
                            <Zap className="mr-2 h-4 w-4" />
                            Innovation meets Engineering
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground lead-tight">
                            Engineers Solving <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orega-blue to-orega-navy dark:to-orega-light">
                                Real Problems
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            Submit your challenge. We engineer the solution. From custom prototyping to automation systems, we turn complex problems into elegant technical realities.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button asChild size="lg" className="h-14 px-8 text-base shadow-lg shadow-orega-blue/25 hover:scale-105 transition-transform">
                                <Link href="/submit-request">Submit a Request <ArrowRight className="ml-2 h-5 w-5" /></Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="h-14 px-8 text-base border-2 hover:bg-orega-navy hover:text-white dark:hover:bg-accent hover:border-transparent transition-all">
                                <Link href="/projects">See Our Work</Link>
                            </Button>
                        </div>
                    </div>

                    <div className="relative hidden md:block aspect-square w-full max-w-lg mx-auto">
                        {/* Gear animation / hero visual placeholder */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-orega-navy to-orega-blue rounded-full opacity-10 animate-pulse delay-75" />
                        <div className="absolute inset-4 bg-gradient-to-tr from-orega-blue to-cyan-400 rounded-full opacity-20 animate-pulse delay-150" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Settings className="w-64 h-64 text-orega-blue opacity-80 animate-[spin_20s_linear_infinite]" />
                            <Cpu className="w-32 h-32 text-orega-navy dark:text-white absolute" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 bg-orega-navy text-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
                        <div className="space-y-2">
                            <h3 className="text-4xl font-bold text-orega-blue">150+</h3>
                            <p className="text-white/80 font-medium">Projects Delivered</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-4xl font-bold text-orega-blue">98%</h3>
                            <p className="text-white/80 font-medium">Client Success</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-4xl font-bold text-orega-blue">24/7</h3>
                            <p className="text-white/80 font-medium">Engineering Support</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-4xl font-bold text-orega-blue">50+</h3>
                            <p className="text-white/80 font-medium">Industry Experts</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Projects Section */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold text-foreground">Featured Projects</h2>
                        <p className="text-lg text-muted-foreground">Discover how we've engineered solutions for businesses across various sectors.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { title: "Automated Assembly Line", category: "Industrial Automation", img: "https://images.unsplash.com/photo-1563207038-f91cb1fdb89a?q=80&w=600&auto=format&fit=crop" },
                            { title: "Smart City IoT Network", category: "IoT Systems", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop" },
                            { title: "Precision Medical Device", category: "Prototyping", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop" },
                            { title: "Renewable Energy Grid", category: "Power Systems", img: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=600&auto=format&fit=crop" }
                        ].map((project, i) => (
                            <div key={i} className="group relative overflow-hidden rounded-2xl cursor-pointer">
                                <div className="aspect-[16/9] w-full relative">
                                    <Image
                                        src={project.img}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                                </div>
                                <div className="absolute bottom-0 left-0 p-8 w-full">
                                    <p className="text-orega-blue font-semibold mb-2">{project.category}</p>
                                    <h3 className="text-xl md:text-3xl font-bold text-white mb-4 group-hover:text-orega-light transition-colors">{project.title}</h3>
                                    <div className="w-12 h-1 bg-orega-blue group-hover:w-full transition-all duration-300" />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Button asChild variant="outline" size="lg" className="border-orega-navy text-orega-navy hover:bg-orega-navy hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-orega-navy">
                            <Link href="/projects">View All Projects</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Services Snapshot */}
            <section className="py-24 bg-slate-50 dark:bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-5xl font-bold">Comprehensive Engineering Services</h2>
                            <p className="text-muted-foreground text-lg">We bring your ideas to life with precision and expertise across multiple engineering disciplines.</p>

                            <ul className="space-y-4">
                                {["Custom Engineering Solutions", "Rapid Prototyping", "IoT & Embedded Systems", "Industrial Automation"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="h-6 w-6 text-orega-blue" />
                                        <span className="text-lg font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button asChild size="lg" className="bg-orega-navy text-white hover:bg-orega-navy/90">
                                <Link href="/services">Explore Services</Link>
                            </Button>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <Card className="border-none shadow-md hover:shadow-lg transition-all dark:bg-card">
                                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                                    <div className="p-4 bg-orega-blue/10 rounded-full">
                                        <Shield className="h-8 w-8 text-orega-blue" />
                                    </div>
                                    <h3 className="font-semibold text-lg">Reliability</h3>
                                    <p className="text-sm text-muted-foreground">Built to last and perform consistently.</p>
                                </CardContent>
                            </Card>
                            <Card className="border-none shadow-md hover:shadow-lg transition-all mt-8 dark:bg-card">
                                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                                    <div className="p-4 bg-orega-blue/10 rounded-full">
                                        <BarChart className="h-8 w-8 text-orega-blue" />
                                    </div>
                                    <h3 className="font-semibold text-lg">Efficiency</h3>
                                    <p className="text-sm text-muted-foreground">Optimized processes and workflows.</p>
                                </CardContent>
                            </Card>
                            <Card className="border-none shadow-md hover:shadow-lg transition-all dark:bg-card">
                                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                                    <div className="p-4 bg-orega-blue/10 rounded-full">
                                        <Users className="h-8 w-8 text-orega-blue" />
                                    </div>
                                    <h3 className="font-semibold text-lg">Collaboration</h3>
                                    <p className="text-sm text-muted-foreground">Working closely with your team.</p>
                                </CardContent>
                            </Card>
                            <Card className="border-none shadow-md hover:shadow-lg transition-all mt-8 dark:bg-card">
                                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                                    <div className="p-4 bg-orega-blue/10 rounded-full">
                                        <Zap className="h-8 w-8 text-orega-blue" />
                                    </div>
                                    <h3 className="font-semibold text-lg">Innovation</h3>
                                    <p className="text-sm text-muted-foreground">Cutting-edge technologies and methods.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-orega-blue text-white overflow-hidden relative">
                <div className="absolute inset-0 bg-black/10" />
                <div className="container relative z-10 mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">What Our Clients Say</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                text: "Orega delivered a prototyping solution that cut our production time by 40%. Their engineering team is unmatched.",
                                name: "Sarah Jenkins",
                                role: "Operations Director, TechCorp",
                            },
                            {
                                text: "The IoT network they designed for our manufacturing plant was robust, scalable, and beautifully executed.",
                                name: "David Chen",
                                role: "CTO, Industro Group",
                            },
                            {
                                text: "When we faced a critical automation failure, Orega diagnosed and solved the problem within 48 hours. Lifesavers.",
                                name: "Elena Rodriguez",
                                role: "Plant Manager, AutoParts Inc.",
                            }
                        ].map((testimonial, i) => (
                            <Card key={i} className="bg-white/10 border-white/20 text-white backdrop-blur-sm">
                                <CardContent className="p-8 space-y-6">
                                    <div className="flex gap-1 text-yellow-400">
                                        {Array(5).fill(0).map((_, j) => (
                                            <svg key={j} className="h-5 w-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                        ))}
                                    </div>
                                    <p className="text-lg text-white/90 italic">"{testimonial.text}"</p>
                                    <div>
                                        <h4 className="font-semibold text-white">{testimonial.name}</h4>
                                        <p className="text-sm text-white/70">{testimonial.role}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 max-w-4xl text-center space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold">Stay Updated</h2>
                    <p className="text-lg text-muted-foreground">Subscribe to our newsletter for the latest engineering insights, project case studies, and company news.</p>

                    <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto pt-4" onSubmit={(e) => { e.preventDefault(); alert('Subscribed!') }}>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-1 px-6 py-4 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-orega-blue shadow-sm"
                            required
                        />
                        <Button type="submit" size="lg" className="h-[58px] rounded-xl px-8 bg-orega-navy hover:bg-orega-navy/90">
                            Subscribe
                        </Button>
                    </form>
                </div>
            </section>
        </div>
    )
}
