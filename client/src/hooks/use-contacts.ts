import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

interface ContactInput {
  name: string;
  email: string;
  message: string;
  type: string;
  captchaToken: string;
}

const API_URL = 'https://gs-corp-backend.onrender.com/api';

export function useCreateContact() {
  const { toast } = useToast();
  
  return useMutation<any, Error, ContactInput>({
    mutationFn: async (data: ContactInput) => {
      const res = await fetch(`${API_URL}/contact/submit`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.type,
          message: data.message,
          company: '',
          captchaToken: data.captchaToken
        }),
      });
      
      const text = await res.text();
      console.log('Response:', text);
      
      if (!res.ok) {
        try {
          const errorData = JSON.parse(text);
          throw new Error(errorData.error || "Failed to submit request");
        } catch (e) {
          throw new Error(`Server error: ${res.status} - ${text.substring(0, 100)}`);
        }
      }
      
      try {
        return JSON.parse(text);
      } catch {
        throw new Error('Invalid response from server');
      }
    },
    onSuccess: () => {
      toast({
        title: "Request Received",
        description: "Our team will be in touch with you shortly.",
        variant: "default",
      });
    },
    onError: (error) => {
      toast({
        title: "Submission Failed",
        description: error.message,
        variant: "destructive",
      });
    }
  });
}
