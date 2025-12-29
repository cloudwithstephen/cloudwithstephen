import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Code, Cloud, Terminal, Zap } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with AWS: Your First EC2 Instance",
      excerpt: "Learn how to launch and configure your first EC2 instance on AWS, including security groups and key pairs.",
      category: "AWS",
      readTime: "5 min read",
      icon: Cloud,
      color: "text-orange-500"
    },
    {
      id: 2,
      title: "Docker Fundamentals: Containerizing Your First App",
      excerpt: "A beginner-friendly guide to Docker containers, images, and how to containerize a simple web application.",
      category: "Docker",
      readTime: "8 min read",
      icon: Code,
      color: "text-blue-500"
    },
    {
      id: 3,
      title: "CI/CD Pipelines Explained: From Code to Deployment",
      excerpt: "Understand the basics of Continuous Integration and Continuous Deployment, and why they matter.",
      category: "DevOps",
      readTime: "10 min read",
      icon: Zap,
      color: "text-yellow-500"
    },
    {
      id: 4,
      title: "Kubernetes Basics: Managing Containers at Scale",
      excerpt: "Introduction to Kubernetes concepts including pods, services, and deployments for managing containerized applications.",
      category: "Kubernetes",
      readTime: "12 min read",
      icon: Terminal,
      color: "text-cyan-500"
    },
    {
      id: 5,
      title: "Infrastructure as Code with Terraform",
      excerpt: "Learn how to define and provision infrastructure using Terraform, making your cloud infrastructure repeatable and version-controlled.",
      category: "Terraform",
      readTime: "15 min read",
      icon: Code,
      color: "text-purple-500"
    },
    {
      id: 6,
      title: "Monitoring and Logging Best Practices",
      excerpt: "Essential monitoring and logging strategies for cloud applications to ensure reliability and quick issue resolution.",
      category: "DevOps",
      readTime: "7 min read",
      icon: Zap,
      color: "text-green-500"
    }
  ];

  const tips = [
    "Always use Infrastructure as Code (IaC) to manage your cloud resources",
    "Implement proper IAM roles and policies from day one",
    "Use multi-stage Docker builds to reduce image size",
    "Set up automated backups for critical data",
    "Monitor costs regularly and set up billing alerts",
    "Use environment variables for configuration, never hardcode secrets",
    "Implement proper error handling and logging in your applications",
    "Use CI/CD pipelines to automate testing and deployment",
    "Follow the principle of least privilege for access management",
    "Regularly update your dependencies and security patches"
  ];

  return (
    <>
      <Helmet>
        <title>Cloud & DevOps Resources | Tips, Insights & Guides | cloudwithstephen</title>
        <meta
          name="description"
          content="Learn cloud computing and DevOps with practical tips, tutorials, and insights. Articles on AWS, Docker, Kubernetes, CI/CD, and more."
        />
        <meta
          name="keywords"
          content="cloud computing tutorials, devops tips, aws guides, docker tutorials, kubernetes guides, ci/cd pipelines, cloud engineering"
        />
        <link rel="canonical" href="https://www.cloudwithstephen.com/blog" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Educational Resources</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Cloud & DevOps
                <span className="text-primary block">Resources & Tips</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Practical insights, tutorials, and best practices to help you master cloud computing and DevOps engineering.
              </p>
            </div>
          </div>
        </section>

        <main className="container mx-auto px-4 md:px-6 py-12 space-y-16">
          {/* Blog Posts Section */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl md:text-4xl font-bold">Latest Articles</h2>
              <Link
                to="/"
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
              >
                Back to Home
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => {
                const IconComponent = post.icon;
                return (
                  <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`p-2 rounded-lg bg-primary/10 ${post.color}`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <Badge variant="secondary">{post.category}</Badge>
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="mt-2">{post.readTime}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                      <button className="text-sm font-medium text-primary hover:underline flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Quick Tips Section */}
          <section className="bg-card border border-border rounded-2xl p-6 md:p-8 lg:p-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Zap className="w-6 h-6 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold">Quick Tips & Best Practices</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {tips.map((tip, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50 border border-border hover:border-primary/30 transition-colors"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-semibold mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-sm md:text-base text-foreground">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center py-12">
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl mb-4">
                  Want More Cloud & DevOps Insights?
                </CardTitle>
                <CardDescription className="text-base md:text-lg">
                  Check out our courses for structured learning paths, or reach out if you have questions!
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/courses">
                  <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
                    Explore Courses
                  </button>
                </Link>
                <Link to="/#contact">
                  <button className="px-6 py-3 border-2 border-border rounded-lg hover:bg-secondary transition-colors font-medium">
                    Get in Touch
                  </button>
                </Link>
              </CardContent>
            </Card>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Blog;

